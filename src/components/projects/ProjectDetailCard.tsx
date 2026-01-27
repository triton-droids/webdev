interface ProjectDetailCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function ProjectDetailCard({
  icon,
  title,
  description,
}: ProjectDetailCardProps) {
  return (
    <div className="border-[6px] border-[#2A2B2D] rounded-[40px] flex flex-col lg:flex-row gap-10 lg:gap-[80px] items-center px-8 md:px-16 lg:px-[97px] py-8 md:py-10 lg:py-[48px] bg-main-bg">
      {/* Icon and Title Section - Figma: column layout, centered, fixed width for alignment */}
      <div className="flex flex-col gap-4 lg:gap-[24px] items-center justify-center w-full lg:w-[200px] shrink-0">
        {/* Icon - Figma: 88px */}
        <div className="w-[60px] h-[60px] md:w-[74px] md:h-[74px] lg:w-[88px] lg:h-[88px] flex items-center justify-center shrink-0">
          <img
            src={icon}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Title - Figma: 64px regular weight, gray #A3B2C2 */}
        <h3 className="text-2xl md:text-4xl lg:text-5xl xl:text-[64px] font-normal text-[#A3B2C2] leading-none text-center">
          {title}
        </h3>
      </div>

      {/* Description - Figma: 24px white, fixed width 676px */}
      <p className="text-base md:text-lg lg:text-xl xl:text-[24px] text-main-text leading-normal lg:w-[676px] text-center lg:text-left">
        {description}
      </p>
    </div>
  );
}
