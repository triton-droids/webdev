import { SectionHeading, BodyText } from '../../../components/Typography';

export default function JoinCTASection() {
  return (
    <section className="flex flex-col gap-6 lg:gap-10 items-center px-6 md:px-20 lg:px-[100px] py-12 lg:py-20 w-full max-w-[1228px] mx-auto">
      {/* Title */}
      <div className="flex items-center justify-center w-full">
        <SectionHeading className="flex-1">
          Ready to build an amazing future?
        </SectionHeading>
      </div>

      {/* Button */}
      <a
        href="#"
        className="bg-accent text-black text-lg md:text-xl lg:text-2xl font-bold px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-5 rounded-full flex items-center justify-center hover:brightness-110 transition-all w-fit"
      >
        Join Triton Droids
      </a>

      {/* Description */}
      <BodyText size="lg" className="text-white w-full">
        Thanks for your interest! Applications are currently closed. Check back
        at the end of next quarter to see what teams we&apos;re accepting new
        members for.
      </BodyText>
    </section>
  );
}
