import ProjectHeroSection from './components/ProjectHeroSection';
import ProjectDetailCard from './components/ProjectDetailCard';
import whatIsRobocupIcon from '../../assets/projects/icons/what-is-robocup-icon.svg';
import ourGoalIcon from '../../assets/projects/icons/our-goal-icon.svg';
import asciiArtImage from '../../assets/projects/hero/robocup-ascii-art.svg';

const ieeeRobocupProject = {
  title: 'IEEE RoboCup',
  description:
    'In collaboration with the Institute of Electrical and Electronics Engineers (IEEE), Triton Droids is proud to announce our participation in RoboCup 2027, an international competition taking place in June 2027.',
  sections: [
    {
      icon: whatIsRobocupIcon,
      title: 'What is RoboCup',
      description:
        'RoboCup brings together brilliant minds from all over the world, including both PhD laboratories and industry grade robotics companies, to compete in a thrilling showcase of autonomous humanoid soccer.',
    },
    {
      icon: ourGoalIcon,
      title: 'Our Goal',
      description:
        'By competing in RoboCup, Triton Droids aims to push the boundaries of humanoid robotics, connect with passionate engineers from diverse backgrounds, and challenge ourselves to be "outside the box" thinkers by expanding what we believe is possible.',
    },
  ],
};

export default function RoboCup() {
  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex flex-col gap-20 md:gap-32 items-center">
        <ProjectHeroSection
          title={ieeeRobocupProject.title}
          description={ieeeRobocupProject.description}
          asciiArtAsset={asciiArtImage}
        />
        <div className="flex flex-col gap-12 md:gap-16 w-full max-w-[1400px] mx-auto px-6 md:px-20 lg:px-[148px]">
          {ieeeRobocupProject.sections.map((section, index) => (
            <ProjectDetailCard
              key={index}
              icon={section.icon}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
