import { useState } from 'react';
import { SectionHeading } from '../Typography';

interface Step {
  number: number;
  label: string;
}

const steps: Step[] = [
  { number: 1, label: 'FORM' },
  { number: 2, label: 'INTERVIEW' },
  { number: 3, label: 'DECISION' },
  { number: 4, label: 'ASSIGNMENT' },
];

export default function RecruitmentProcess() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="flex flex-col gap-4 md:gap-6 items-start py-12 lg:py-20 w-full max-w-[1158px] mx-auto px-6">
      {/* Title */}
      <SectionHeading>Recruitment Process</SectionHeading>

      {/* Steps container */}
      <div
        className="relative w-full h-[100px]"
        onMouseLeave={() => setHoveredStep(null)}
      >
        {/* Default state - all steps in a row */}
        <div
          className={`flex items-center w-full transition-opacity duration-400 ${
            hoveredStep !== null
              ? 'opacity-0 pointer-events-none'
              : 'opacity-100'
          }`}
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-center"
              style={{ flex: index === steps.length - 1 ? 'none' : 1 }}
            >
              <div
                className="flex flex-col gap-2 items-center text-center cursor-pointer hover:scale-105 transition-transform min-w-[100px]"
                onMouseEnter={() => setHoveredStep(step.number)}
              >
                <span className="text-2xl md:text-3xl lg:text-[40px] text-main-text">
                  {step.number}
                </span>
                <span className="text-base md:text-lg lg:text-xl text-main-text">
                  {step.label}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-[2px] mx-4 md:mx-8 border-t-2 border-dashed border-main-text/40" />
              )}
            </div>
          ))}
        </div>

        {/* Hover states - one for each step */}
        {steps.map((step) => (
          <div
            key={`hover-${step.number}`}
            className={`absolute inset-0 flex items-center transition-all duration-400 ${
              hoveredStep === step.number
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 pointer-events-none translate-x-8'
            }`}
          >
            {/* Step label on left */}
            <div className="flex flex-col gap-2 items-center text-center min-w-[120px] md:min-w-[160px]">
              <span className="text-2xl md:text-3xl lg:text-[40px] text-main-text">
                {step.number}
              </span>
              <span className="text-base md:text-lg lg:text-xl text-main-text">
                {step.label}
              </span>
            </div>

            {/* Solid line extending right */}
            <div
              className={`flex-1 h-[2px] bg-main-text ml-6 transition-all duration-500 origin-left ${
                hoveredStep === step.number ? 'scale-x-100' : 'scale-x-0'
              }`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
