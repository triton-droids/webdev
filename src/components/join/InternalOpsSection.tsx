import designIcon from '../../assets/join/design-icon-new.svg';
import businessIcon from '../../assets/join/business-icon-new.svg';
import webdevIcon from '../../assets/join/webdev-icon.svg';
import marketingIcon from '../../assets/join/marketing-icon-new.svg';

interface TeamCardProps {
  icon: string;
  name: string;
}

function TeamCard({ icon, name }: TeamCardProps) {
  return (
    <div className="border-[6px] border-[#2A2B2D] rounded-[40px] w-[274px] h-[375px] flex flex-col items-center justify-center gap-4 shrink-0">
      <img src={icon} alt={name} className="w-[50px] h-[50px]" />
      <span className="text-2xl text-main-text text-center px-8">{name}</span>
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
    <section className="flex flex-col gap-20 items-center justify-center py-20 px-6 lg:px-[148px] w-full">
      <div className="flex flex-col w-full max-w-[1216px]">
        <h2 className="text-[36px] font-bold text-main-text">Internal</h2>
        <p className="text-[32px] text-main-text">Operations Teams</p>
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center w-full max-w-[1216px]">
        {internalOpsTeams.map((team) => (
          <TeamCard key={team.id} icon={team.icon} name={team.name} />
        ))}
      </div>
    </section>
  );
}
