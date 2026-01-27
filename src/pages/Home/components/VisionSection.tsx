import challengeIcon from '../../../assets/icons/challenge-icon.svg';
import missionIcon from '../../../assets/icons/mission-icon.svg';
import focusIcon from '../../../assets/icons/focus-icon.svg';
import {
  SectionHeading,
  CardTitle,
  BodyText,
} from '../../../components/Typography';

interface VisionCardProps {
  icon: string;
  title: string;
  children: React.ReactNode;
}

function VisionCard({ icon, title, children }: VisionCardProps) {
  return (
    <div className="border-[6px] border-[#2A2B2D] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] flex flex-col items-center px-4 md:px-6 pt-6 md:pt-8 lg:pt-10 pb-8 md:pb-12 lg:pb-16 flex-1 basis-0 min-w-0">
      <div className="size-16 md:size-20 lg:size-[88px] flex items-center justify-center shrink-0 mb-6 md:mb-8 lg:mb-10">
        <img alt="" className="max-w-full max-h-full" src={icon} />
      </div>
      <CardTitle className="text-center mb-4 md:mb-5 lg:mb-6 font-normal">
        {title}
      </CardTitle>
      <BodyText size="lg" className="text-center max-w-[280px] mx-auto">
        {children}
      </BodyText>
    </div>
  );
}

export default function VisionSection() {
  return (
    <section className="flex flex-col gap-10 md:gap-16 lg:gap-20 items-center justify-center pb-12 md:pb-16 lg:pb-20 pt-6 md:pt-8 lg:pt-10 px-6 md:px-12 lg:px-20 xl:px-[100px] bg-main-bg">
      <SectionHeading className="w-full text-center">
        A Future Worth Building
      </SectionHeading>
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-9 items-stretch w-full max-w-[1400px]">
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
