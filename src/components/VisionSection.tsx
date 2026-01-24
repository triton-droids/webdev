import challengeIcon from '../assets/icons/challenge-icon.svg';
import missionIcon from '../assets/icons/mission-icon.svg';
import focusIcon from '../assets/icons/focus-icon.svg';

interface VisionCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

function VisionCard({ icon, title, children }: VisionCardProps) {
  return (
    <div className="border-[6px] border-[#2A2B2D] rounded-[40px] flex flex-col items-center px-6 pt-10 pb-16 flex-1 basis-0 min-w-0">
      <div className="size-[88px] flex items-center justify-center shrink-0 mb-10">
        <img alt="" className="max-w-full max-h-full" src={icon} />
      </div>
      <h3 className="text-[40px] font-normal text-main-text text-center mb-6">
        {title}
      </h3>
      <p className="text-2xl text-main-text text-center max-w-[280px] leading-[1.4] mx-auto">
        {children}
      </p>
    </div>
  );
}

export default function VisionSection() {
  return (
    <section className="flex flex-col gap-20 items-center justify-center pb-20 pt-10 px-[100px] bg-main-bg">
      <h2 className="text-[64px] font-bold text-main-text w-full text-center">
        A Future Worth Building
      </h2>
      <div className="flex gap-9 items-stretch w-full max-w-[1400px]">
        <VisionCard icon={challengeIcon} title="Our Challenge">
          At Triton Droids, we&apos;re taking on one of the biggest challenges
          of our time:{' '}
          <span className="text-accent">
            creating affordable, high-efficiency humanoid robots
          </span>{' '}
          that can level the playing field in global production.
        </VisionCard>

        <VisionCard icon={missionIcon} title="Our Mission">
          To{' '}
          <span className="text-accent">
            design robots that can work in any environment
          </span>
          , from dangerous mines to remote farms, and{' '}
          <span className="text-accent">empower communities</span> that have
          been left behind by technology.
        </VisionCard>

        <VisionCard icon={focusIcon} title="Our Focus">
          <span className="text-accent">Bridging the tech gap</span> between the
          rich and poor countries can make an incremental difference in value
          creation by <span className="text-accent">over $2 trillion</span>.
        </VisionCard>
      </div>
    </section>
  );
}
