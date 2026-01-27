import { SectionHeading, BodyText } from '../../../components/Typography';

export default function RecruitmentSection() {
  return (
    <section className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-center text-center py-12 md:py-16 lg:py-20 w-full px-6">
      <SectionHeading className="leading-tight">
        2025-2026 Member Recruitment is{' '}
        <span className="text-accent">Closed</span>
      </SectionHeading>
      <BodyText size="lg" className="text-muted-text">
        Stay tuned for our next application season!
      </BodyText>
    </section>
  );
}
