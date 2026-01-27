import type { KeyboardEvent } from 'react';
import { TeamMember } from '../types/team';

interface TeamMemberCardProps {
  member: TeamMember;
  onClick: () => void;
  isExpanded?: boolean;
}

// LinkedIn icon SVG - square with 'in' logo
const LinkedInIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="inline-block"
  >
    <rect width="24" height="24" fill="#000" rx="2" />
    <path
      d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      fill="#fff"
    />
  </svg>
);

export default function TeamMemberCard({
  member,
  onClick,
  isExpanded = false,
}: TeamMemberCardProps) {
  const modalId = `member-modal-${member.id}`;
  const nameId = `member-name-${member.id}`;
  const bioId = `member-bio-${member.id}`;
  const isExecutive = member.category === 'executive';

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick();
    }
  };

  // Expanded profile view
  if (isExpanded) {
    return (
      <button
        type="button"
        className={`rounded-card cursor-pointer flex flex-col bg-main-bg w-full text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-main-bg overflow-hidden ${
          isExecutive ? 'border-2 border-gray-600' : ''
        }`}
        style={{
          boxShadow: isExecutive
            ? '0 0 40px rgba(254, 206, 0, 0.2), 0 0 80px rgba(0, 0, 0, 0.5), 0 0 20px rgba(75, 85, 99, 0.4), 0 0 40px rgba(75, 85, 99, 0.2)'
            : '0 0 40px rgba(254, 206, 0, 0.2), 0 0 80px rgba(0, 0, 0, 0.5)',
        }}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-labelledby={nameId}
        aria-describedby={bioId}
        id={modalId}
      >
        {/* Top Section - fixed size, same as collapsed card */}
        <section
          className="w-full rounded-t-card overflow-hidden bg-main-bg flex flex-col p-4"
          style={{ aspectRatio: '13 / 14' }}
        >
          {/* Name - Bold White */}
          <h2
            id={nameId}
            className="text-lg font-bold text-main-text leading-tight mb-0"
          >
            {member.name}
          </h2>

          {/* Role - Yellow */}
          <p
            className="text-[10px] font-bold uppercase tracking-wider mb-1"
            style={{ color: '#FECE00' }}
          >
            {member.role}
          </p>

          {/* Bio - shrunk to fit in fixed card, no scroll */}
          {member.bio && (
            <div id={bioId} className="flex-1 overflow-hidden min-h-0">
              <p className="text-[11px] leading-[1.2] text-main-text whitespace-pre-line">
                {member.bio}
              </p>
            </div>
          )}
        </section>

        {/* Bottom Section - Same as text section in collapsed card */}
        <section className="w-full bg-main-bg rounded-b-card px-6 py-4">
          {/* Spacer to match collapsed card's text section height */}
        </section>
      </button>
    );
  }

  // Collapsed card view
  return (
    <button
      type="button"
      className={`rounded-card cursor-pointer hover:scale-105 transition-transform flex flex-col bg-main-bg w-full text-left focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-main-bg ${
        isExecutive ? 'border-2 border-gray-600' : ''
      }`}
      style={
        isExecutive
          ? {
              boxShadow:
                '0 0 20px rgba(75, 85, 99, 0.4), 0 0 40px rgba(75, 85, 99, 0.2)',
            }
          : undefined
      }
      onClick={onClick}
      onKeyDown={handleKeyDown}
      aria-haspopup="dialog"
      aria-controls={modalId}
      aria-label={`View ${member.name}'s profile`}
    >
      {/* Picture Section - Separate and on top */}
      <section
        className="w-full rounded-t-card overflow-hidden bg-main-bg relative"
        style={{ aspectRatio: '13 / 14' }}
      >
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover block rounded-3xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-main-bg to-main-bg/50">
            <div className="text-6xl font-bold text-accent">
              {member.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
          </div>
        )}
      </section>

      {/* Text Section - Separate and below picture */}
      <section className="w-full bg-main-bg rounded-b-card px-6 py-4 text-center">
        {/* Blue Role Text */}
        <p
          className="text-sm font-bold uppercase mb-0"
          style={{ color: '#007BFF' }}
        >
          {member.role}
        </p>

        {/* White Name Text with LinkedIn Icon */}
        <div className="flex items-center justify-center gap-2">
          <h3 className="text-xl font-bold text-main-text">{member.name}</h3>
          {member.linkedin && (
            <span className="text-main-text inline-flex items-center">
              <LinkedInIcon />
            </span>
          )}
        </div>
      </section>
    </button>
  );
}
