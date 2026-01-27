import { Link } from 'react-router-dom';

import heroBackground from '../assets/hero-background.png';
import { HeroHeading, BodyText } from './Typography';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] px-6 md:px-12 lg:px-20 xl:px-[100px] bg-main-bg">
      {/* Background image */}
      <div className="absolute inset-0 mix-blend-lighten overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-full right-0 top-0 max-w-none object-contain object-right"
          src={heroBackground}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-8 md:gap-12 lg:gap-16 xl:gap-[80px] items-start w-full max-w-[1400px]">
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-[24px] items-start text-main-text">
          <HeroHeading className="max-w-full xl:max-w-[1031px]">
            Engineering What Comes Next
          </HeroHeading>
          <BodyText size="lg" className="max-w-full lg:max-w-[792px]">
            We&apos;re building autonomous humanoid robots to expand global
            access to robotics—powered by students, experts, and industry
            partners working toward a more equitable future.
          </BodyText>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 lg:gap-[24px] items-start">
          <a
            href="#projects"
            className="bg-accent text-button-text text-lg md:text-xl lg:text-2xl px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-[99px] flex items-center justify-center"
          >
            Our Projects
          </a>
          <Link
            to="/join"
            className="border border-accent text-accent text-lg md:text-xl lg:text-2xl px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-[99px] flex items-center justify-center"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
}
