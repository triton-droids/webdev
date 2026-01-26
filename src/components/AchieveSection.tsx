import { useState } from 'react';
import slide1Image from '../assets/carousel/slide-1.jpg';

interface SlideData {
  image: string;
  title: string;
  points: { highlight: string; text: string }[];
}

const slides: SlideData[] = [
  {
    image: slide1Image,
    title: "Leveraging UCSD's Unique Assets",
    points: [
      {
        highlight: 'Expert Faculty Collaboration',
        text: ': Access to multidisciplinary experts ensures holistic, socially impactful robot development.',
      },
      {
        highlight: 'Student Volunteer Network',
        text: ': Large student body aids in data collection, user testing, and real-world development.',
      },
      {
        highlight: 'Advanced Data Infrastructure',
        text: ': UCSD data center enables complex simulations and AI development.',
      },
    ],
  },
  {
    image: slide1Image,
    title: 'Building World-Class Robots',
    points: [
      {
        highlight: 'Cutting-Edge Research',
        text: ': Pioneering new approaches in robotics and AI integration.',
      },
      {
        highlight: 'Industry Partnerships',
        text: ': Collaborating with leading tech companies for real-world applications.',
      },
      {
        highlight: 'Open Source Philosophy',
        text: ': Sharing our designs to accelerate global robotics development.',
      },
    ],
  },
  {
    image: slide1Image,
    title: 'Community Impact',
    points: [
      {
        highlight: 'Educational Outreach',
        text: ': Inspiring the next generation of robotics engineers.',
      },
      {
        highlight: 'Accessibility Focus',
        text: ': Designing robots that can help underserved communities.',
      },
      {
        highlight: 'Sustainable Design',
        text: ': Building with environmental responsibility in mind.',
      },
    ],
  },
  {
    image: slide1Image,
    title: 'Future Vision',
    points: [
      {
        highlight: 'Autonomous Systems',
        text: ': Developing fully autonomous humanoid capabilities.',
      },
      {
        highlight: 'Global Deployment',
        text: ': Planning for worldwide distribution and support.',
      },
      {
        highlight: 'Continuous Innovation',
        text: ': Constantly pushing the boundaries of what robots can do.',
      },
    ],
  },
];

function ArrowButton({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`size-[66px] rounded-full border-4 border-muted-text flex items-center justify-center hover:border-main-text transition-colors ${
        direction === 'left' ? '' : 'rotate-180'
      }`}
      aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-muted-text"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default function AchieveSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const slide = slides[currentSlide];

  return (
    <section className="bg-main-bg py-20 flex flex-col gap-20 items-center justify-center">
      <h2 className="text-[64px] font-bold text-main-text text-center px-[100px]">
        How We Aim to Achieve Our Mission
      </h2>

      <div className="flex gap-12 items-center justify-center w-full">
        {/* Left side panel */}
        <div className="bg-[#2A2B2D] h-[456px] w-[70px] rounded-r-[40px] shrink-0" />

        {/* Left arrow */}
        <ArrowButton direction="left" onClick={prevSlide} />

        {/* Main carousel content */}
        <div className="flex flex-col gap-[72px] items-center w-[1050px]">
          {/* Slide content */}
          <div className="bg-[#2A2B2D] rounded-[40px] flex gap-6 items-center w-full overflow-hidden">
            {/* Image */}
            <div className="w-[513px] h-[595px] shrink-0 p-10 pr-4">
              <div className="w-full h-full rounded-[32px] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-10 px-8 py-10 flex-1">
              <h3 className="text-[40px] font-normal text-main-text leading-tight">
                {slide.title}
              </h3>
              <ul className="flex flex-col gap-6 list-disc ml-9">
                {slide.points.map((point, index) => (
                  <li
                    key={index}
                    className="text-2xl text-main-text leading-[1.4]"
                  >
                    <span className="text-accent">{point.highlight}</span>
                    {point.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-[18px] items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  index === currentSlide
                    ? 'bg-main-text w-[55px] h-[18px]'
                    : 'border-2 border-muted-text size-[18px] hover:border-main-text'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <ArrowButton direction="right" onClick={nextSlide} />

        {/* Right side panel */}
        <div className="bg-[#2A2B2D] h-[456px] w-[70px] rounded-l-[40px] shrink-0" />
      </div>
    </section>
  );
}
