import { useState, useEffect } from 'react';
import { teamMembers } from '../../data/teamMembers';
import TeamMemberCard from '../../components/TeamMemberCard';
import { TeamMember } from '../../types/team';
import teamPhoto from '../../imgs/hero/team-hero.png';

// Shared layout constants for consistent spacing
const SECTION_WRAPPER = 'py-16';
const CONTAINER = 'w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';
const TITLE = 'text-5xl font-bold mb-8 text-center';
const GRID = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const executives = teamMembers.filter((m) => m.category === 'executive');
  const teamLeads = teamMembers.filter((m) => m.category === 'team-lead');

  // Handle ESC key to close expanded card
  useEffect(() => {
    if (!selectedMember) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMember(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedMember]);

  return (
    <>
      <div className={CONTAINER}>
        <h1 className="text-8xl font-bold">MEET THE TEAM</h1>
        <p className="text-xl mt-6">
          Meet our talented team! Each member brings unique skills and
          experiences, contributing to our collective success. Learn more about
          their backgrounds and expertise below.
        </p>
      </div>

      <div className={`my-8 ${CONTAINER}`}>
        <img
          src={teamPhoto}
          alt="Team photo"
          className="w-full rounded-lg object-contain bg-card-bg"
        />
      </div>

      <section className={SECTION_WRAPPER}>
        <div className={CONTAINER}>
          <h2 className={TITLE}>OUR EXECUTIVES</h2>
          <div className={GRID}>
            {executives.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onClick={() =>
                  setSelectedMember(
                    selectedMember?.id === member.id ? null : member
                  )
                }
                isExpanded={selectedMember?.id === member.id}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`${SECTION_WRAPPER} mt-12`}>
        <div className={CONTAINER}>
          <h2 className={TITLE}>OUR TEAM LEADS</h2>
          <div className={GRID}>
            {teamLeads.map((member) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                onClick={() =>
                  setSelectedMember(
                    selectedMember?.id === member.id ? null : member
                  )
                }
                isExpanded={selectedMember?.id === member.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
