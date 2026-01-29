import { alumniMembers } from '../../data/alumniMembers';
import AlumniMemberCard from '../../components/AlumniMemberCard';
import {
  HeroHeading,
  SectionHeading,
  BodyText,
} from '../../components/Typography';
import alumniPhoto from '../../imgs/alumni-page/hero/alumni-hero.png';

// Shared layout constants for consistent spacing
const SECTION_WRAPPER = 'py-16';
const CONTAINER = 'w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';
const GRID = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14';

export default function Alumni() {
  const executives = alumniMembers.filter((m) => m.category === 'executive');
  const teamLeads = alumniMembers.filter((m) => m.category === 'team-lead');

  return (
    <>
      <div className={CONTAINER}>
        <HeroHeading>Meet Our Alumni</HeroHeading>
        <BodyText size="lg" className="mt-6">
          Meet our alumni! We are proud to celebrate the people who helped build
          Triton Droids and continue to inspire us long after their time at UC
          San Diego.
        </BodyText>
      </div>

      <div className={`my-8 ${CONTAINER}`}>
        <img
          src={alumniPhoto}
          alt="Alumni photo"
          className="w-full rounded-lg object-contain bg-card-bg"
        />
      </div>

      <section className={SECTION_WRAPPER}>
        <div className={CONTAINER}>
          <SectionHeading className="mb-8 text-left">Executives</SectionHeading>
          <div className={GRID}>
            {executives.map((member) => (
              <AlumniMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${SECTION_WRAPPER} mt-12`}>
        <div className={CONTAINER}>
          <SectionHeading className="mb-8 text-left">Team Leads</SectionHeading>
          <div className={GRID}>
            {teamLeads.map((member) => (
              <AlumniMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
