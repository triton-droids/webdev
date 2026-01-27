import HumanoidTeamsSection from './HumanoidTeamsSection';
import InternalOpsSection from './InternalOpsSection';
import PupperTeamsSection from './PupperTeamsSection';
import { SectionHeading } from '../../../components/Typography';

export default function OurTeamsSection() {
  return (
    <section className="flex flex-col w-full">
      {/* Our Teams Header */}
      <div className="px-6 lg:px-[148px] py-12 md:py-16 lg:py-20 w-full">
        <SectionHeading>Our Teams</SectionHeading>
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
