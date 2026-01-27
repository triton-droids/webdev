export default function JoinCTASection() {
  return (
    <section className="flex flex-col gap-6 lg:gap-10 items-center px-6 md:px-20 lg:px-[100px] py-12 lg:py-20 w-full max-w-[1228px] mx-auto">
      {/* Title - Figma: 64px bold, left-aligned, full width */}
      <div className="flex items-center justify-center w-full">
        <h2 className="flex-1 text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold text-main-text">
          Ready to build an amazing future?
        </h2>
      </div>

      {/* Button - Figma: 706px wide, 101px tall, 64px text, rounded-99px */}
      <a
        href="#"
        className="bg-accent text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-5 rounded-full flex items-center justify-center hover:brightness-110 transition-all w-fit"
      >
        Join Triton Droids
      </a>

      {/* Description - Figma: 40px regular, white, full width */}
      <p className="text-lg md:text-xl lg:text-2xl xl:text-[28px] text-white leading-normal w-full">
        Thanks for your interest! Applications are currently closed. Check back
        at the end of next quarter to see what teams we&apos;re accepting new
        members for.
      </p>
    </section>
  );
}
