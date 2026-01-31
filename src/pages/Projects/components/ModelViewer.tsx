import '@google/model-viewer';
import { BodyText } from '../../../components/Typography';

interface ModelViewerProps {
  modelUrl?: string;
  fallbackImage?: string;
  alt?: string;
}

export default function ModelViewer({
  modelUrl,
  fallbackImage,
  alt = '3D Model',
}: ModelViewerProps) {
  return (
    <div
      className={`w-full rounded-[24px] overflow-hidden shadow-xl ring-1 ring-white/[0.06] ${modelUrl ? 'p-0 flex items-center justify-center h-[500px] md:h-[600px] bg-[#141416]' : 'p-8 md:p-12 bg-[#2A2B2D]'}`}
    >
      {modelUrl ? (
        <model-viewer
          src={modelUrl}
          alt={alt}
          camera-controls
          auto-rotate
          auto-rotate-delay="2000"
          rotation-per-second="30deg"
          shadow-intensity="0.5"
          shadow-softness="0.9"
          exposure="1.25"
          tone-mapping="neutral"
          interaction-prompt="none"
          className="block w-full h-full max-w-full max-h-full min-w-0 min-h-0"
          style={{ width: '100%', height: '100%' }}
        />
      ) : fallbackImage ? (
        <div className="w-full rounded-[16px] overflow-hidden">
          <img
            src={fallbackImage}
            alt={alt}
            className="w-full h-auto object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-[500px] rounded-[16px] bg-[#1A1A1A] flex items-center justify-center">
          <BodyText className="text-main-text">3D Model Placeholder</BodyText>
        </div>
      )}
    </div>
  );
}
