import ProjectHeroSection from './components/ProjectHeroSection';
import learningProjectsImage from '../../assets/projects/pupper-image.jpg';

export default function LearningProjects() {
  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex flex-col gap-20 md:gap-32 items-center">
        <ProjectHeroSection
          title="Learning Projects"
          description="Learning projects at Triton Droids give members hands-on experience with robotics. More details coming soon."
          asciiArtAsset={learningProjectsImage}
        />
      </div>
    </div>
  );
}
