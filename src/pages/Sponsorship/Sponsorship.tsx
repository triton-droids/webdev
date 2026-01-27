import buildCostImage from '../../assets/build-cost.png';
import heidenhainLogo from '../../assets/heidenhain.png';
import ansysLogo from '../../assets/ansys.png';
import onshapeLogo from '../../assets/onshape.png';
import {
  HeroHeading,
  SectionHeading,
  BodyText,
} from '../../components/Typography';

export default function Sponsorship() {
  return (
    <>
      <section className="py-8 md:py-12 lg:py-16 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-4 md:gap-6 text-left max-w-4xl">
          <HeroHeading>Fund a Droid. Make a Difference</HeroHeading>
          <BodyText className="max-w-4xl">
            Your donations directly fund essential components, tools, and
            materials needed to build our humanoid robot. Each contribution
            helps students gain hands-on experience and develop practical
            skills, preparing them for careers in robotics and engineering.
          </BodyText>
        </div>
      </section>

      <section className="py-8 md:py-12 lg:py-16 px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-4 md:gap-6">
            <SectionHeading className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              No contribution is too small.
            </SectionHeading>
            <BodyText>
              We offer several different sponsorship tier levels. In addition to
              monetary donations, we also greatly appreciate sponsorships in the
              form of parts or mentorship. Please refer to the sponsorship
              package for details!
            </BodyText>
          </div>

          <div className="flex flex-col gap-6 items-start">
            <img
              src={buildCostImage}
              alt="Estimated Build Cost"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        <div className="mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 lg:gap-16">
          <button className="w-full px-6 md:px-12 lg:px-20 py-3 md:py-4 bg-blue-500 text-stone-950 text-lg md:text-xl rounded-button font-bold border-2 border-transparent hover:bg-stone-950 hover:text-blue-500 hover:border-blue-500 transition-colors">
            Sponsorship Package
          </button>
          <button className="w-full px-6 md:px-12 lg:px-20 py-3 md:py-4 bg-yellow-400 text-stone-950 text-lg md:text-xl rounded-button font-bold border-2 border-transparent hover:bg-stone-950 hover:text-yellow-400 hover:border-yellow-400 transition-colors">
            Donate Now
          </button>
        </div>
      </section>

      <section className="py-8 md:py-12 lg:py-16 px-6 md:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
          <SectionHeading className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            Current Sponsors
          </SectionHeading>
          <a
            href="#"
            className="text-white text-base md:text-lg underline hover:text-accent transition-colors"
          >
            view all
          </a>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-6 lg:gap-8 items-center">
          <div className="bg-transparent p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-[100px] md:min-h-[120px] min-w-[150px] md:min-w-[200px]">
            <img
              src={heidenhainLogo}
              alt="HEIDENHAIN"
              className="max-w-full max-h-[100px] md:max-h-[120px] object-contain"
            />
          </div>
          <div className="bg-white p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-[100px] md:min-h-[120px] min-w-[150px] md:min-w-[200px]">
            <img
              src={ansysLogo}
              alt="Ansys"
              className="max-w-full max-h-16 md:max-h-20 object-contain"
            />
          </div>
          <div className="bg-white p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-[100px] md:min-h-[120px] min-w-[150px] md:min-w-[200px]">
            <img
              src={onshapeLogo}
              alt="onshape"
              className="max-w-full max-h-16 md:max-h-20 object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}
