import designIcon from '../../assets/join/design-icon-new.svg';
import businessIcon from '../../assets/join/business-icon-new.svg';
import webdevIcon from '../../assets/join/webdev-icon.svg';
import marketingIcon from '../../assets/join/marketing-icon-new.svg';
import { SectionHeading, BodyText } from '../Typography';

interface TeamCardProps {
  icon: string;
  name: string;
}

function TeamCard({ icon, name }: TeamCardProps) {
  return (
    <div className="border-[6px] border-[#2A2B2D] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] w-full sm:w-[240px] md:w-[260px] lg:w-[274px] h-[300px] md:h-[340px] lg:h-[375px] flex flex-col items-center justify-center gap-4 shrink-0">
      <img
        src={icon}
        alt={name}
        className="w-10 md:w-12 lg:w-[50px] h-10 md:h-12 lg:h-[50px]"
      />
      <span className="text-lg md:text-xl lg:text-2xl text-main-text text-center px-4 md:px-6 lg:px-8">
        {name}
      </span>
    </div>
  );
}

const internalOpsTeams = [
  { id: 'design', name: 'Design', icon: designIcon },
  { id: 'business', name: 'Business', icon: businessIcon },
  { id: 'webdev', name: 'Web Development', icon: webdevIcon },
  { id: 'marketing', name: 'Marketing', icon: marketingIcon },
];

export default function InternalOpsSection() {
  return (
    <section className="flex flex-col gap-12 md:gap-16 lg:gap-20 items-center justify-center py-12 md:py-16 lg:py-20 px-6 lg:px-[148px] w-full">
      <div className="flex flex-col w-full max-w-[1216px]">
        <SectionHeading className="text-2xl md:text-3xl lg:text-4xl">
          Internal
        </SectionHeading>
        <BodyText size="lg" className="text-slate-400">
          Operations Teams
        </BodyText>
      </div>
      <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 items-center justify-center w-full max-w-[1216px]">
        {internalOpsTeams.map((team) => (
          <TeamCard key={team.id} icon={team.icon} name={team.name} />
        ))}
      </div>
    </section>
  );
}
