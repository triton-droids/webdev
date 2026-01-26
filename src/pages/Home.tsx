import HeroSection from '../components/HeroSection';
import VisionSection from '../components/VisionSection';
import AchieveSection from '../components/AchieveSection';
import ProjectsSection from '../components/ProjectsSection';
import RecruitmentSection from '../components/RecruitmentSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* A Future Worth Building - Vision Cards */}
      <VisionSection />

      {/* How We Aim to Achieve Our Mission - Carousel */}
      <AchieveSection />

      {/* A Vision Set in Motion - Projects */}
      <ProjectsSection />

      {/* Recruitment Status */}
      <RecruitmentSection />
    </>
  );
}
