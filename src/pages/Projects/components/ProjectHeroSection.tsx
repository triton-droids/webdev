import { HeroHeading, BodyText } from '../../../components/Typography';

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
    <section className="flex flex-col gap-10 items-start px-6 md:px-20 lg:px-[148px] w-full">
      <div className="flex flex-col gap-4 lg:gap-6 items-start w-full max-w-[1228px]">
        <HeroHeading>{title}</HeroHeading>
        <BodyText size="base">{description}</BodyText>
      </div>

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
            <BodyText className="text-main-text/50">
              ASCII Art Asset - Loading...
            </BodyText>
          </div>
        )}
      </div>
    </section>
  );
}
