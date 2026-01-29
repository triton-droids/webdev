import {
  HeroHeading,
  SectionHeading,
  CardTitle,
  BodyText,
} from '../../components/Typography';
import { academicAdvisors, advisoryBoard } from '../../data/advisors';
import type { Advisor } from '../../types/advisor';
import advisoryHeroImg from '../../imgs/advisors-page/hero/advisory-hero.png';

const CONTAINER = 'w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left';
const SECTION_WRAPPER = 'py-16';
const SECTION_TITLE = 'text-left mb-12';
const GRID = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14';

function AdvisorCard({ name, department, image }: Advisor) {
  return (
    <article className="rounded-card flex flex-col bg-main-bg w-full text-left overflow-hidden">
      <div
        className="w-full overflow-hidden bg-main-bg relative rounded-t-card"
        style={{ aspectRatio: '13 / 14' }}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover block rounded-3xl"
        />
      </div>
      <section className="w-full bg-main-bg rounded-b-card px-6 py-4 text-left">
        <CardTitle className="text-sm md:text-base font-bold text-white leading-tight">
          {name}
        </CardTitle>
        <p
          className="mt-1 text-sm md:text-base leading-relaxed"
          style={{ color: '#FECE00' }}
        >
          {department}
        </p>
      </section>
    </article>
  );
}

export default function Advisor() {
  return (
    <>
      <div className={CONTAINER}>
        <HeroHeading>Meet Our Advisory Board</HeroHeading>
        <BodyText size="lg" className="mt-6">
          Meet our advisory board! Their experience and encouragement play a
          huge role in shaping our team&apos;s direction, and we&apos;re
          grateful to have them as part of Triton Droids.
        </BodyText>
      </div>

      <div className={`mt-12 mb-8 ${CONTAINER}`}>
        <img
          src={advisoryHeroImg}
          alt="Advisory board"
          className="w-full rounded-lg object-contain bg-card-bg"
        />
      </div>

      <section className={`${SECTION_WRAPPER} mt-8`}>
        <div className={CONTAINER}>
          <SectionHeading className={SECTION_TITLE}>
            Our Academic Advisors
          </SectionHeading>
          <div className={GRID}>
            {academicAdvisors.map((advisor) => (
              <AdvisorCard
                key={advisor.name}
                name={advisor.name}
                department={advisor.department}
                image={advisor.image}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`${SECTION_WRAPPER} mt-12 pb-32 md:pb-40 lg:pb-48`}>
        <div className={CONTAINER}>
          <SectionHeading className={SECTION_TITLE}>
            Our Advisory Board
          </SectionHeading>
          <div className={GRID}>
            {advisoryBoard.map((advisor) => (
              <AdvisorCard
                key={advisor.name}
                name={advisor.name}
                department={advisor.department}
                image={advisor.image}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
