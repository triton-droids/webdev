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
    <div className="w-full rounded-[24px] overflow-hidden bg-[#2A2B2D] p-8 md:p-12">
      {modelUrl ? (
        <div className="w-full h-[500px] md:h-[600px] rounded-[16px] overflow-hidden bg-[#1A1A1A] flex items-center justify-center">
          {/* Placeholder for 3D model - can be replaced with Three.js, model-viewer, or Sketchfab embed */}
          <div className="text-center text-main-text">
            <p className="text-xl mb-4">3D Interactive Model</p>
            <p className="text-muted-text text-sm">
              {modelUrl ? 'Model loading...' : 'Model URL not provided'}
            </p>
          </div>
        </div>
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
          <p className="text-main-text">3D Model Placeholder</p>
        </div>
      )}
    </div>
  );
}
