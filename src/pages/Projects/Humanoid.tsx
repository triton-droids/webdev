import ProjectHeroSection from './components/ProjectHeroSection';
import ProjectDetailCard from './components/ProjectDetailCard';
import ModelViewer from './components/ModelViewer';
import ProjectGallery from './components/ProjectGallery';
import rationaleIcon from '../../assets/projects/icons/rationale-icon.svg';
import functionIcon from '../../assets/projects/icons/function-icon.svg';
import approachIcon from '../../assets/projects/icons/approach-icon.svg';
import progressIcon from '../../assets/projects/icons/progress-icon.svg';
import asciiArtImage from '../../assets/projects/hero/ascii-art.png';

const humanoidProject = {
  title: 'Humanoid Robot',
  description:
    "Developing UCSD's first full-scale humanoid robot through a staged, research-driven approach to bipedal locomotion and real-world functionality.",
  sections: [
    {
      icon: rationaleIcon,
      title: 'Rationale',
      description:
        "The humanoid robot industry is rapidly emerging, with companies like Tesla, Boston Dynamics, and Figure leading the charge. These robots have the potential to revolutionize industries from manufacturing to healthcare. At Triton Droids, we're bridging the gap between academic research and real-world robotics technology, creating a platform for students to contribute to this cutting-edge field.",
    },
    {
      icon: functionIcon,
      title: 'Function',
      description:
        'Our humanoid robot is designed to perform essential human movements including walking, balancing, object manipulation, and navigation. It will be equipped with advanced sensors for object detection, spatial awareness, and environmental interaction. The robot will be capable of performing tasks in hazardous environments, assisting in research, and serving as a platform for AI and machine learning development.',
    },
    {
      icon: approachIcon,
      title: 'Approach',
      description:
        "We are taking a staged, research-driven approach to development. Our initial focus is on the robot's lower body, mastering bipedal locomotion through iterative design and testing. We are building a solid foundation in mechanical design, control systems, and sensor integration before moving to upper body development. This methodical approach ensures each component is thoroughly tested and optimized.",
    },
    {
      icon: progressIcon,
      title: 'Progress',
      description:
        'We have successfully manufactured the lower body of our humanoid robot, including the legs, feet, and hip assembly. Our current goal is to achieve stable lower body locomotion by the end of 2025. We are also in the process of designing the upper body, including the torso, arms, and head assembly. Our team is actively working on control algorithms, sensor integration, and testing protocols.',
    },
  ],
  galleryImages: [
    'https://via.placeholder.com/800x600/2A2B2D/F5F5F5?text=Robot+Image+1',
    'https://via.placeholder.com/800x600/2A2B2D/F5F5F5?text=Robot+Image+2',
    'https://via.placeholder.com/800x600/2A2B2D/F5F5F5?text=Robot+Image+3',
  ],
  modelUrl: undefined,
};

export default function Humanoid() {
  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex flex-col gap-20 md:gap-32 items-center">
        <ProjectHeroSection
          title={humanoidProject.title}
          description={humanoidProject.description}
          asciiArtAsset={asciiArtImage}
        />
        <div className="flex flex-col gap-12 md:gap-16 w-full max-w-[1400px] mx-auto px-6 md:px-20 lg:px-[148px]">
          {humanoidProject.sections.map((section, index) => (
            <ProjectDetailCard
              key={index}
              icon={section.icon}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-20 lg:px-[148px]">
          <ModelViewer
            modelUrl={humanoidProject.modelUrl}
            fallbackImage={undefined}
            alt="Humanoid Robot 3D Model"
          />
        </div>
        <ProjectGallery images={humanoidProject.galleryImages} />
      </div>
    </div>
  );
}
