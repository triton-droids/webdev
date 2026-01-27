interface ProjectHeroSectionProps {
  title: string;
  description: string;
  asciiArtAsset?: string;
  asciiArtText?: string;
}

export default function ProjectHeroSection({
  title,
  description,
  asciiArtAsset,
  asciiArtText,
}: ProjectHeroSectionProps) {
  return (
    <section className="flex flex-col gap-12 lg:gap-[80px] items-start py-12 lg:py-[80px] px-6 md:px-20 lg:px-[148px] w-full">
      {/* Title & Description Group - Figma: stacked with small gap */}
      <div className="flex flex-col gap-4 lg:gap-6 items-start w-full max-w-[1228px]">
        {/* Title - Figma: 128px bold, leading-[135px] */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-[128px] font-bold text-main-text leading-none xl:leading-[135px]">
          {title}
        </h1>

        {/* Description - Figma: 32px regular */}
        <p className="text-xl md:text-2xl lg:text-[28px] xl:text-[32px] text-main-text leading-normal">
          {description}
        </p>
      </div>

      {/* ASCII Art Asset - Figma: rounded corners, no padding, image fills container */}
      <div className="w-full rounded-[40px] overflow-hidden bg-[#1A1A1A]">
        {asciiArtAsset ? (
          <img
            src={asciiArtAsset}
            alt="ASCII Art"
            className="w-full h-auto object-cover"
          />
        ) : asciiArtText ? (
          <pre className="text-xs md:text-sm lg:text-base text-main-text font-mono whitespace-pre overflow-x-auto p-8 md:p-12">
            {asciiArtText}
          </pre>
        ) : (
          <div className="w-full h-64 flex items-center justify-center">
            <p className="text-main-text/50">ASCII Art Asset - Loading...</p>
          </div>
        )}
      </div>
    </section>
  );
}
