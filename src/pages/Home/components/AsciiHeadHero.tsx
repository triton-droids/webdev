import { useEffect, useRef, useState } from 'react';

import {
  computeFaceNormals,
  normalizeVertices,
  parseObj,
  renderFrame,
  type Vec3,
} from '../../../utils/asciiHeadRenderer';

const OBJ_URL = new URL('../../../assets/MaleHead.obj', import.meta.url).href;

const WIDTH = 200;
const HEIGHT = 120;
const ANGLE_X = 0.12;
const ROTATION_SPEED = 0.01;

export default function AsciiHeadHero() {
  const [frame, setFrame] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [modelReady, setModelReady] = useState(false);
  const dataRef = useRef<{
    vertices: Vec3[];
    faces: number[][];
    faceNormals: Vec3[];
    angle: number;
  } | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(OBJ_URL)
      .then((r) => r.text())
      .then((text) => {
        if (cancelled) return;
        const { vertices, faces } = parseObj(text);
        const normalized = normalizeVertices(vertices);
        const faceNormals = computeFaceNormals(normalized, faces);
        dataRef.current = {
          vertices: normalized,
          faces,
          faceNormals,
          angle: 0,
        };
        setFrame(
          renderFrame(normalized, faces, faceNormals, WIDTH, HEIGHT, 0, ANGLE_X)
        );
        setModelReady(true);
      })
      .catch((e) => {
        if (!cancelled) setError(String(e));
      });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!modelReady || !dataRef.current) return;

    const data = dataRef.current;
    let rafId = 0;

    const tick = () => {
      data.angle += ROTATION_SPEED;
      if (data.angle > 2 * Math.PI) data.angle -= 2 * Math.PI;
      setFrame(
        renderFrame(
          data.vertices,
          data.faces,
          data.faceNormals,
          WIDTH,
          HEIGHT,
          data.angle,
          ANGLE_X
        )
      );
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [modelReady]);

  if (error) {
    return (
      <div className="flex items-center justify-center h-full min-h-[200px] text-muted-text text-sm">
        Failed to load 3D model
      </div>
    );
  }

  if (!frame) {
    return (
      <div className="flex items-center justify-center h-full min-h-[200px] text-muted-text text-sm">
        Loading…
      </div>
    );
  }

  return (
    <pre
      className="font-mono leading-none text-main-text select-none tabular-nums whitespace-pre h-full flex items-center text-[0.55vh] lg:text-[0.7vh]"
      style={{ fontVariantNumeric: 'tabular-nums' }}
      aria-hidden
    >
      {frame}
    </pre>
  );
}
