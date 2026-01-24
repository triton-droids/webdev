import { Link } from 'react-router-dom';

import heroBackground from '../assets/hero-background.png';

export default function HeroSection() {
  return (
    <section className="relative flex items-center justify-center w-full min-h-[700px] px-[100px] bg-main-bg">
      {/* Background image */}
      <div className="absolute inset-0 mix-blend-lighten overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-full right-0 top-0 max-w-none object-contain object-right"
          src={heroBackground}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-[80px] items-start w-full max-w-[1400px]">
        <div className="flex flex-col gap-[24px] items-start text-main-text">
          <h1 className="text-[128px] font-bold leading-[135px] w-[1031px]">
            Engineering What Comes Next
          </h1>
          <p className="text-[32px] leading-normal w-[792px]">
            We&apos;re building autonomous humanoid robots to expand global
            access to robotics—powered by students, experts, and industry
            partners working toward a more equitable future.
          </p>
        </div>

        <div className="flex gap-[24px] items-start">
          <a
            href="#projects"
            className="bg-accent text-button-text text-2xl px-10 py-4 rounded-[99px] h-[60px] flex items-center justify-center"
          >
            Our Projects
          </a>
          <Link
            to="/join"
            className="border border-accent text-accent text-2xl px-10 py-4 rounded-[99px] h-[60px] flex items-center justify-center"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
}
