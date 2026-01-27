import JoinHeroSection from './components/JoinHeroSection';
import JoinCTASection from './components/JoinCTASection';
import WhyJoinCarousel from './components/WhyJoinCarousel';
import RecruitmentProcess from './components/RecruitmentProcess';
import OurTeamsSection from './components/OurTeamsSection';

export default function Join() {
  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex flex-col items-center">
        <JoinHeroSection />
        <JoinCTASection />
        <WhyJoinCarousel />
        <RecruitmentProcess />
        <OurTeamsSection />
      </div>
    </div>
  );
}
