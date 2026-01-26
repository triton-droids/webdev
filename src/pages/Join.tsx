import JoinHeroSection from '../components/join/JoinHeroSection';
import JoinCTASection from '../components/join/JoinCTASection';
import WhyJoinCarousel from '../components/join/WhyJoinCarousel';
import RecruitmentProcess from '../components/join/RecruitmentProcess';
import OurTeamsSection from '../components/join/OurTeamsSection';

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
