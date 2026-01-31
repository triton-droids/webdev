const CHAR_RAMP =
  ' .\'`^",:;Il!i><~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';

export type Vec3 = [number, number, number];

export function parseObj(text: string): {
  vertices: Vec3[];
  faces: number[][];
} {
  const vertices: Vec3[] = [];
  const faces: number[][] = [];
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    if (line.startsWith('v ')) {
      const parts = line.trim().split(/\s+/);
      const x = parseFloat(parts[1]);
      const y = parseFloat(parts[2]);
      const z = parseFloat(parts[3]);
      vertices.push([x, y, z]);
    } else if (line.startsWith('f ')) {
      const parts = line.trim().split(/\s+/).slice(1);
      const face: number[] = [];
      for (const p of parts) {
        const idx = parseInt(p.split('/')[0], 10) - 1;
        face.push(idx);
      }
      if (face.length >= 3) faces.push(face);
    }
  }
  return { vertices, faces };
}

export function normalizeVertices(vertices: Vec3[]): Vec3[] {
  if (vertices.length === 0) return vertices;
  const xs = vertices.map((v) => v[0]);
  const ys = vertices.map((v) => v[1]);
  const zs = vertices.map((v) => v[2]);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const minZ = Math.min(...zs);
  const maxZ = Math.max(...zs);
  const centerX = (minX + maxX) / 2;
  const centerY = (minY + maxY) / 2;
  const centerZ = (minZ + maxZ) / 2;
  const scale = Math.max(maxX - minX, maxY - minY, maxZ - minZ) || 1;
  return vertices.map(([x, y, z]) => [
    (x - centerX) / scale,
    (y - centerY) / scale,
    (z - centerZ) / scale,
  ]);
}

function rotateVertex(
  vx: number,
  vy: number,
  vz: number,
  angleX: number,
  angleY: number
): Vec3 {
  const cosX = Math.cos(angleX);
  const sinX = Math.sin(angleX);
  const y1 = vy * cosX - vz * sinX;
  const z1 = vy * sinX + vz * cosX;
  const cosY = Math.cos(angleY);
  const sinY = Math.sin(angleY);
  const x2 = vx * cosY + z1 * sinY;
  const z2 = -vx * sinY + z1 * cosY;
  return [x2, y1, z2];
}

export function computeFaceNormals(
  vertices: Vec3[],
  faces: number[][]
): Vec3[] {
  return faces.map((face) => {
    if (face.length < 3) return [0, 0, -1] as Vec3;
    const v0 = vertices[face[0]];
    const v1 = vertices[face[1]];
    const v2 = vertices[face[2]];
    const e1: Vec3 = [v1[0] - v0[0], v1[1] - v0[1], v1[2] - v0[2]];
    const e2: Vec3 = [v2[0] - v0[0], v2[1] - v0[1], v2[2] - v0[2]];
    let nx = e1[1] * e2[2] - e1[2] * e2[1];
    let ny = e1[2] * e2[0] - e1[0] * e2[2];
    let nz = e1[0] * e2[1] - e1[1] * e2[0];
    const mag = Math.sqrt(nx * nx + ny * ny + nz * nz);
    if (mag > 0) {
      nx /= mag;
      ny /= mag;
      nz /= mag;
    }
    return [nx, ny, nz];
  });
}

function fillTriangle(
  zBuffer: number[][],
  screen: string[][],
  p0: [number, number, number],
  p1: [number, number, number],
  p2: [number, number, number],
  lightVal: number,
  width: number,
  height: number
): void {
  let [x0, y0, z0] = p0;
  let [x1, y1, z1] = p1;
  let [x2, y2, z2] = p2;

  if (y0 > y1) {
    [x0, y0, z0, x1, y1, z1] = [x1, y1, z1, x0, y0, z0];
  }
  if (y0 > y2) {
    [x0, y0, z0, x2, y2, z2] = [x2, y2, z2, x0, y0, z0];
  }
  if (y1 > y2) {
    [x1, y1, z1, x2, y2, z2] = [x2, y2, z2, x1, y1, z1];
  }

  const totalHeight = y2 - y0;
  if (totalHeight < 0.5) return;

  const charIdx = Math.max(
    0,
    Math.min(
      CHAR_RAMP.length - 1,
      Math.floor(lightVal * (CHAR_RAMP.length - 1))
    )
  );
  const char = CHAR_RAMP[charIdx];

  const yStart = Math.max(0, Math.floor(y0));
  const yEnd = Math.min(height - 1, Math.floor(y2));

  for (let y = yStart; y <= yEnd; y++) {
    const secondHalf = y > y1 || Math.abs(y1 - y0) < 0.5;
    const segmentHeight = secondHalf ? y2 - y1 : y1 - y0;
    const seg = segmentHeight < 0.5 ? 0.5 : segmentHeight;

    let alpha = (y - y0) / totalHeight;
    let beta = (y - (secondHalf ? y1 : y0)) / seg;
    alpha = Math.max(0, Math.min(1, alpha));
    beta = Math.max(0, Math.min(1, beta));

    let ax = x0 + (x2 - x0) * alpha;
    let az = z0 + (z2 - z0) * alpha;
    let bx: number;
    let bz: number;
    if (secondHalf) {
      bx = x1 + (x2 - x1) * beta;
      bz = z1 + (z2 - z1) * beta;
    } else {
      bx = x0 + (x1 - x0) * beta;
      bz = z0 + (z1 - z0) * beta;
    }

    if (ax > bx) {
      [ax, bx] = [bx, ax];
      [az, bz] = [bz, az];
    }

    const xStart = Math.max(0, Math.floor(ax));
    const xEnd = Math.min(width - 1, Math.floor(bx));
    const dx = bx - ax < 0.5 ? 0.5 : bx - ax;

    for (let x = xStart; x <= xEnd; x++) {
      let t = (x - ax) / dx;
      t = Math.max(0, Math.min(1, t));
      const z = az + (bz - az) * t;
      if (z < zBuffer[y][x]) {
        zBuffer[y][x] = z;
        screen[y][x] = char;
      }
    }
  }
}

export function renderFrame(
  vertices: Vec3[],
  faces: number[][],
  faceNormals: Vec3[],
  width: number,
  height: number,
  angleY: number,
  angleX = 0.12
): string {
  const zBuffer: number[][] = Array.from({ length: height }, () =>
    Array(width).fill(Infinity)
  );
  const screen: string[][] = Array.from({ length: height }, () =>
    Array(width).fill(' ')
  );

  const lx = 0.35;
  const ly = 0.55;
  const lz = -0.75;
  const lmag = Math.sqrt(lx * lx + ly * ly + lz * lz);
  const lxn = lx / lmag;
  const lyn = ly / lmag;
  const lzn = lz / lmag;

  const fov = 2.5;
  const distance = 1.4;
  const aspect = 0.5;
  const scale = 0.72;

  const transformed: Vec3[] = vertices.map(([vx, vy, vz]) =>
    rotateVertex(vx, vy, vz, angleX, angleY)
  );

  const faceData: {
    cz: number;
    fi: number;
    face: number[];
    lightVal: number;
  }[] = [];

  for (let fi = 0; fi < faces.length; fi++) {
    const face = faces[fi];
    const cz = face.reduce((s, i) => s + transformed[i][2], 0) / face.length;

    const [nx, ny, nz] = faceNormals[fi];
    const [rnx, rny, rnz] = rotateVertex(nx, ny, nz, angleX, angleY);
    if (rnz > 0.1) continue;

    const dot = -(rnx * lxn + rny * lyn + rnz * lzn);
    let lightVal = Math.max(0.15, Math.min(1, (dot + 1) / 2));
    const depthFactor = Math.max(
      0.2,
      Math.min(1, 1 - (cz + distance - 1) / 1.2)
    );
    lightVal = lightVal * 0.75 + depthFactor * 0.25;

    faceData.push({ cz, fi, face, lightVal });
  }

  faceData.sort((a, b) => b.cz - a.cz);

  for (const { face, lightVal } of faceData) {
    const projected: [number, number, number][] = [];
    for (const idx of face) {
      const [rx, ry, rz] = transformed[idx];
      const zOff = Math.max(0.1, rz + distance);
      const factor = fov / zOff;
      const sx = rx * factor * height * aspect * scale + width / 2;
      const sy = -ry * factor * height * 0.5 * scale + height / 2;
      projected.push([sx, sy, zOff]);
    }
    for (let i = 1; i < projected.length - 1; i++) {
      fillTriangle(
        zBuffer,
        screen,
        projected[0],
        projected[i],
        projected[i + 1],
        lightVal,
        width,
        height
      );
    }
  }

  return screen.map((row) => row.join('')).join('\n');
}
