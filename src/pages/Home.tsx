import HeroSection from '../components/HeroSection';
import VisionSection from '../components/VisionSection';

export default function Home() {
  return (
    <>
      <HeroSection />

      <VisionSection />

      <hr className="border-muted-text/20 my-8" />

      <section className="achieve py-16 px-8">
        <h2 className="text-center text-5xl font-bold mb-16">
          How We Aim to Achieve Our Mission
        </h2>
        <div className="card max-w-[50rem] mx-auto p-10 grid grid-cols-[1fr_1.2fr] gap-12 items-center">
          <img className="achieve-img" src="" alt="Robot lab" />
          <div className="achieve-content">
            <h3 className="mb-7 text-4xl font-normal leading-tight m-0">
              Leveraging UCSD&apos;s Unique Assets
            </h3>
            <ul className="list-none p-0">
              <li className="mb-6 text-lg leading-normal">
                <strong className="text-accent font-medium">
                  Expert Faculty Collaboration:
                </strong>{' '}
                Access to multidisciplinary experts ensures holistic, socially
                impactful robot development.
              </li>
              <li className="mb-6 text-lg leading-normal">
                <strong className="text-accent font-medium">
                  Student Volunteer Network:
                </strong>{' '}
                Large student body aids in data collection, user testing, and
                real-world development.
              </li>
              <li className="mb-6 text-lg leading-normal">
                <strong className="text-accent font-medium">
                  Advanced Data Infrastructure:
                </strong>{' '}
                UCSD data center enables complex simulations and AI development.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-muted-text/20 my-8" />

      <section className="recruitment text-center py-8">
        <h2 className="text-5xl font-bold">
          Winter Recruitment is <strong className="text-accent">Closed</strong>
        </h2>
        <p className="text-xl text-muted-text">
          Stay tuned for our next application season!
        </p>
      </section>

      <hr className="border-muted-text/20 my-8" />

      <section className="master-plan py-16 px-24 max-w-[60rem] mx-auto grid grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <ol className="mp-steps m-0 p-0 flex flex-col gap-6">
          <li className="card rounded-lg p-10 min-h-8 flex items-center justify-between gap-6 text-2xl max-w-96">
            Research, Design and Motion Data Collection
          </li>
          <li className="card rounded-lg p-10 min-h-8 flex items-center justify-between gap-6 text-2xl max-w-96">
            Limb and Torso Prototyping, ROS stack
          </li>
          <li className="card rounded-lg p-10 min-h-8 flex items-center justify-between gap-6 text-2xl max-w-96">
            Advanced Development and System Refinement
          </li>
          <li className="card rounded-lg p-10 min-h-8 flex items-center justify-between gap-6 text-2xl max-w-96">
            Final Prototype and Deployment
          </li>
        </ol>
        <div className="mp-side">
          <h2 className="mb-7 text-5xl font-bold leading-tight m-0">
            Master Plan 2024 - 2028
          </h2>
          <button className="btn-primary text-base">Our Plan</button>
        </div>
      </section>

      <hr className="border-muted-text/20 my-8" />

      <section className="why-ucsd py-12 px-8 grid grid-cols-2 gap-10 max-w-[72rem] mx-auto">
        <h2 className="col-span-2 text-center text-5xl font-bold">
          Why UCSD is the Best Place to build a Humanoid Robot
        </h2>
        <article className="card p-8 min-h-[18rem] grid grid-cols-[10rem_1fr] gap-7 items-center">
          <img src="" alt="Supercomputer" />
          <div className="wu-content flex flex-col justify-center gap-5 h-full">
            <h3 className="m-0 text-3xl font-medium">
              San Diego Super Computer
            </h3>
            <p className="m-0 leading-relaxed text-base max-w-[26rem]">
              UCSD is home to one of the largest supercomputers in the region.
              This is necessary for the large compute power needed to create an
              autonomous bot using real world vision data and teleoperation.
            </p>
            <a className="text-main-text cursor-pointer">Read More</a>
          </div>
        </article>
        <article className="card p-8 min-h-[18rem] grid grid-cols-[10rem_1fr] gap-7 items-center">
          <img src="" alt="Robotics lab" />
          <div className="wu-content flex flex-col justify-center gap-5 h-full">
            <h3 className="m-0 text-3xl font-medium">
              Contextual Robotics Institute
            </h3>
            <p className="m-0 leading-relaxed text-base max-w-[26rem]">
              The ground-breaking work being done at the contextual robotics
              Institute on autonomous systems and cyber-physical technologies is
              critical to creating a fully autonomous bot.
            </p>
            <a className="text-main-text cursor-pointer">Read More</a>
          </div>
        </article>
        <article className="card p-8 min-h-[18rem] grid grid-cols-[10rem_1fr] gap-7 items-center">
          <img src="" alt="Robotics research" />
          <div className="wu-content flex flex-col justify-center gap-5 h-full">
            <h3 className="m-0 text-3xl font-medium">
              Advanced Robotics and Control Lab
            </h3>
            <p className="m-0 leading-relaxed text-base max-w-[26rem]">
              The Advanced Robotics and Control Lab (ARClab) develops
              intelligent robots for medical automation, biomimetic systems, and
              planetary exploration, using interdisciplinary techniques to
              enhance adaptability and decision-making.
            </p>
            <a className="text-main-text cursor-pointer">Read More</a>
          </div>
        </article>
        <article className="card p-8 min-h-[18rem] grid grid-cols-[10rem_1fr] gap-7 items-center">
          <img src="" alt="UCSD campus" />
          <div className="wu-content flex flex-col justify-center gap-5 h-full">
            <h3 className="m-0 text-3xl font-medium">Smartest Brains</h3>
            <p className="m-0 leading-relaxed text-base max-w-[26rem]">
              UCSD&apos;s top-tier faculty and highly innovative student body
              create the perfect environment for building humanoid robots,
              blending expertise in AI, robotics, and interdisciplinary
              research.
            </p>
            <a className="text-main-text cursor-pointer">Read More</a>
          </div>
        </article>
      </section>

      <hr className="border-muted-text/20 my-8" />

      <section className="latest-blog py-16 px-8 grid grid-cols-[auto_1fr] gap-16 items-center">
        <h2 className="text-5xl font-bold">Latest Blog</h2>
        <article className="card p-8 min-h-[18rem] grid grid-cols-[1.2fr_1fr] gap-10 items-center">
          <img src="" alt="Triton Droids workshop" />
          <div className="blog-content flex flex-col justify-center gap-4">
            <h3 className="m-0 text-3xl font-medium">
              How Triton Droids Started
            </h3>
            <p className="m-0 text-base leading-relaxed max-w-[26rem] text-muted-text">
              The idea for Triton Droids, UCSD&apos;s first and only humanoid
              robotics club, was born out of a passion for innovation and a
              desire to...
            </p>
            <a href="#" className="mt-3 text-base text-white">
              View More
            </a>
          </div>
        </article>
      </section>
    </>
  );
}
