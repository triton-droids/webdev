import { Link } from 'react-router-dom';

import heroBackground from '../assets/hero-background.png';

export default function HeroSection() {
  return (
    <section className="relative flex items-center min-h-[700px] px-[100px] -mx-20">
      {/* Background image */}
      <div className="absolute inset-0 mix-blend-lighten overflow-hidden pointer-events-none">
        <img
          alt=""
          className="absolute h-full left-0 top-0 w-[111%] max-w-none object-cover"
          src={heroBackground}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col gap-20">
        <div className="flex flex-col gap-6 text-main-text">
          <h1 className="text-[128px] font-bold leading-[135px] max-w-[1031px]">
            Engineering What Comes Next
          </h1>
          <p className="text-[32px] leading-normal max-w-[792px]">
            We&apos;re building autonomous humanoid robots to expand global access to
            robotics—powered by students, experts, and industry partners working
            toward a more equitable future.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="#projects"
            className="bg-accent text-button-text text-2xl px-10 py-4 rounded-button h-[60px] flex items-center justify-center"
          >
            Our Projects
          </a>
          <Link
            to="/join"
            className="border border-accent text-accent text-2xl px-10 py-4 rounded-button h-[60px] flex items-center justify-center"
          >
            Join Us
          </Link>
        </div>
      </div>
    </section>
  );
}
