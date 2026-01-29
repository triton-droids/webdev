import ProjectHeroSection from './components/ProjectHeroSection';
import LearningProjectSection from './components/LearningProjectSection';
import ProjectGallery from './components/ProjectGallery';
import learningAsciiArt from '../../assets/projects/hero/learning-ascii-art.svg';

const hero = {
  title: 'Learning Projects',
  description:
    'In addition to our main project, we have a subset of open source learning projects for skill building purposes. As an inclusive club that accepts members of varying skill levels, we believe that these projects are essential for developing skills that will directly translate to applicable skills for developing a humanoid robot.',
};

const projects = [
  {
    title: 'Triton Pupper',
    description:
      'The Triton Pupper Project is Triton Droids’ newest initiative at inspiring undergraduate students to break boundaries with modern innovation. Next to developing a humanoid robot, the Triton Pupper Team is aiming to develop a robotic dog at the undergraduate level. The goals of this initiative include building a proof-of-concept out of the Petoi Bittle Dog, and then graduating to an industry-grade robotic dog that matches the sophistication of those built by Boston Dynamics, Unitree, and Ghost Robotics, to name a few.',
  },
  {
    title: 'ARCTOS Robot Arm',
    description:
      'The ARCTOS Arm is an industrial-scale, six degree of freedom (6 DoF) robotic arm designed to advance research in classical control, learning-based control, and computer vision. As an open source project, Triton Droids aims to expand its capabilities by developing and sharing new software packages and 3D printable components with the broader robotics community. The arm will integrate with cutting-edge technologies such as the Amazing Hand by Pollen Robotics and Vision-Language-Action (VLA) models, enabling intelligent, general-purpose task performance and pushing the limits of autonomous manipulation.',
  },
  {
    title: 'Telearm Project',
    description:
      'TThe SO101 - SO100 Robot Arms are compact, five degree of freedom (5 DoF) robotic systems designed as the primary testbed for reinforcement learning and Vision Language Action (VLA) model development. Their small form factor enables rapid experimentation and scalable testing, allowing the Simulations Team to prototype and refine intelligent control algorithms before deploying them onto the main humanoid robot.',
  },
];

const galleryPlaceholders = [
  'https://via.placeholder.com/800x600/2A2B2D/F5F5F5?text=Robot+Image+1',
  'https://via.placeholder.com/800x600/2A2B2D/F5F5F5?text=Robot+Image+2',
  'https://via.placeholder.com/800x600/2A2B2D/F5F5F5?text=Robot+Image+3',
];

export default function LearningProjects() {
  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex flex-col gap-20 md:gap-32 items-center w-full">
        <ProjectHeroSection
          title={hero.title}
          description={hero.description}
          asciiArtAsset={learningAsciiArt}
        />
        <div className="flex flex-col gap-20 md:gap-32 w-full items-center px-6 md:px-20 lg:px-[148px]">
          {projects.map((project, index) => (
            <LearningProjectSection
              key={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        <ProjectGallery images={galleryPlaceholders} />
      </div>
    </div>
  );
}
