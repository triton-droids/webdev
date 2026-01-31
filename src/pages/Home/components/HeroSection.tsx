import { Link } from 'react-router-dom';

import { HeroHeading, BodyText } from '../../../components/Typography';
import AsciiHeadHero from './AsciiHeadHero';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[50vh] lg:min-h-[70vh] px-6 md:px-12 lg:px-16 xl:px-20 bg-main-bg">
      <div className="absolute inset-0 mix-blend-lighten overflow-hidden pointer-events-none flex items-center justify-end">
        <div className="absolute h-full right-0 top-0 flex items-center">
          <AsciiHeadHero />
        </div>
      </div>

      {/* Content - max-w-7xl = 1280px, consistent with other sections */}
      <div className="relative flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-start w-full max-w-7xl">
        <div className="flex flex-col gap-4 md:gap-6 items-start text-main-text">
          {/* max-w-4xl = 896px, fits comfortably on 13" laptops */}
          <HeroHeading className="max-w-full xl:max-w-4xl">
            Engineering What Comes Next
          </HeroHeading>
          {/* max-w-3xl = 768px, good for readability */}
          <BodyText size="lg" className="max-w-full lg:max-w-3xl">
            We&apos;re building autonomous humanoid robots to expand global
            access to robotics—powered by students, experts, and industry
            partners working toward a more equitable future.
          </BodyText>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-start">
          <a
            href="#projects"
            onClick={(event) => {
              event.preventDefault();
              const section = document.getElementById('projects');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-accent text-button-text text-lg md:text-xl lg:text-2xl px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-[99px] flex items-center justify-center hover:bg-slate-400 hover:text-stone-950 hover:outline-slate-400 transition-colors"
          >
            Our Projects
          </a>
          <Link
            to="/join"
            className="outline outline-1 outline-offset-[-1px] outline-accent text-accent text-lg md:text-xl lg:text-2xl px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-[99px] flex items-center justify-center hover:bg-slate-400 hover:text-stone-950 hover:outline-slate-400 transition-colors"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
}
