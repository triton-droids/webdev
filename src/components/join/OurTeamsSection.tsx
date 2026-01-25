import HumanoidTeamsSection from './HumanoidTeamsSection';
import InternalOpsSection from './InternalOpsSection';
import PupperTeamsSection from '../pupper/PupperTeamsSection';

export default function OurTeamsSection() {
  return (
    <section className="flex flex-col w-full">
      {/* Our Teams Header */}
      <div className="px-6 lg:px-[148px] py-20 w-full">
        <h2 className="text-[64px] font-bold text-main-text">Our Teams</h2>
      </div>

      {/* Humanoid Droid Project */}
      <HumanoidTeamsSection />

      {/* Internal Operations */}
      <InternalOpsSection />

      {/* Triton Pupper */}
      <PupperTeamsSection />
    </section>
  );
}
