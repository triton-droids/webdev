export default function JoinCTASection() {
  // Set to true when applications are open
  const isApplicationOpen = false;

  return (
    <section className="flex flex-col gap-8 lg:gap-10 items-center px-6 md:px-20 lg:px-[148px] py-12 lg:py-20 w-full">
      {/* Title - Figma: 64px bold */}
      <div className="flex items-center justify-center w-full">
        <h2 className="flex-1 text-3xl md:text-4xl lg:text-5xl xl:text-[64px] font-bold text-main-text leading-tight">
          Ready to build an amazing future?
        </h2>
      </div>

      {/* Description - Figma: 40px with yellow highlight */}
      <p className="text-xl md:text-2xl lg:text-3xl xl:text-[40px] text-main-text leading-normal w-full">
        Thanks for your interest!{' '}
        <span className="text-accent">Applications are currently closed</span>.
        Check back at the end of next quarter to see what teams we&apos;re
        accepting new members for.
      </p>

      {/* Button - Figma: 32px, disabled when applications closed */}
      <button
        disabled={!isApplicationOpen}
        className={`text-xl md:text-2xl lg:text-[32px] font-normal px-8 md:px-10 lg:px-10 py-3 md:py-4 lg:py-4 rounded-full flex items-center justify-center transition-all ${
          isApplicationOpen
            ? 'bg-accent text-black hover:brightness-110 cursor-pointer'
            : 'bg-[#2A2B2D] text-main-text cursor-not-allowed'
        }`}
      >
        Join Triton Droids
      </button>
    </section>
  );
}
