// Hero image from Figma - team presentation photo
const heroImage = 'https://www.figma.com/api/mcp/asset/1a82298a-e33b-4c2b-a896-e3e3944414bd';

export default function JoinHeroSection() {
  return (
    <section className="flex flex-col gap-12 lg:gap-20 items-start py-12 lg:py-20 w-full max-w-[1228px] mx-auto px-6">
      {/* Title - Figma: 128px bold, line-height 135px */}
      <h1 className="text-5xl md:text-7xl lg:text-[80px] xl:text-[100px] font-bold leading-[1.05] text-main-text w-full">
        Join the Team
      </h1>
      
      {/* Image container - Figma: 530px height, rounded-40px */}
      <div className="w-full h-[280px] md:h-[380px] lg:h-[450px] xl:h-[530px] rounded-[24px] lg:rounded-[40px] overflow-hidden relative">
        <img
          src={heroImage}
          alt="Triton Droids team presentation"
          className="absolute w-full h-[200%] object-cover object-top left-0 -top-[75%]"
        />
      </div>
    </section>
  );
}
