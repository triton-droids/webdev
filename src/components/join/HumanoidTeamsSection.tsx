import mechanicalIcon from '../../assets/humanoid/mechanical-icon.svg';
import electricalIcon from '../../assets/humanoid/electrical-icon.svg';
import embeddedSystemsIcon from '../../assets/humanoid/embedded-systems-icon.svg';
import machineLearningIcon from '../../assets/humanoid/machine-learning-icon.svg';

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

const teams = [
  { id: 'mechanical', name: 'Mechanical', icon: mechanicalIcon },
  { id: 'electrical', name: 'Electrical', icon: electricalIcon },
  {
    id: 'software-embedded',
    name: 'Software: Embedded Systems',
    icon: embeddedSystemsIcon,
  },
  {
    id: 'software-ml',
    name: 'Software: Machine Learning',
    icon: machineLearningIcon,
  },
];

export default function HumanoidTeamsSection() {
  return (
    <section className="flex flex-col gap-20 items-center justify-center py-20 px-6 lg:px-[148px] w-full">
      <div className="flex flex-col w-full max-w-[1216px]">
        <h2 className="text-[36px] font-bold text-main-text">
          Humanoid Droid Project
        </h2>
        <p className="text-[32px] text-main-text">Main Engineering Teams</p>
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center w-full max-w-[1216px]">
        {teams.map((team) => (
          <TeamCard key={team.id} icon={team.icon} name={team.name} />
        ))}
      </div>
    </section>
  );
}
