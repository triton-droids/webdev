import { alumniMembers } from '../../data/alumniMembers';
import AlumniMemberCard from '../../components/AlumniMemberCard';
import alumniPhoto from '../../imgs/alumni-page/hero/alumni-hero.png';

// Shared layout constants for consistent spacing
const SECTION_WRAPPER = 'py-16';
const CONTAINER = 'w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';
const TITLE = 'text-5xl font-bold mb-8 text-left';
const GRID = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14';

export default function Alumni() {
  const executives = alumniMembers.filter((m) => m.category === 'executive');
  const teamLeads = alumniMembers.filter((m) => m.category === 'team-lead');

  return (
    <>
      <div className={CONTAINER}>
        <h1 className="text-8xl font-bold">Meet Our Alumni</h1>
        <p className="text-xl mt-6">
          Meet our alumni! We are proud to celebrate the people who helped build
          Triton Droids and continue to inspire us long after their time at UC
          San Diego.
        </p>
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
          <h2 className={TITLE}>Executives</h2>
          <div className={GRID}>
            {executives.map((member) => (
              <AlumniMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      <section className={`${SECTION_WRAPPER} mt-12`}>
        <div className={CONTAINER}>
          <h2 className={TITLE}>Team Leads</h2>
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
