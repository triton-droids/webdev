import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

// Slide images - local assets
import slide1Image from '../assets/carousel/slide-1.jpg';
import slide2Image from '../assets/carousel/slide-2.jpg';
import slide3Image from '../assets/carousel/slide-3.jpg';
import slide4Image from '../assets/carousel/slide-4.jpg';

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
    image: slide2Image,
    title: 'Focus on Equity and Global Impact',
    points: [
      {
        highlight: 'Disrupting Global Production Disparities',
        text: ': Low-cost robots address global inequities in production efficiency.',
      },
      {
        highlight: 'Targeting Underserved Markets',
        text: ': Committed to deploying robots in underserved regions for transformative impact.',
      },
    ],
  },
  {
    image: slide3Image,
    title: 'Modular and Scalable Robotics Solutions',
    points: [
      {
        highlight: 'Customizable Robotics Platforms',
        text: ': Modular robots adaptable across various industries, ensuring scalability.',
      },
      {
        highlight: 'Affordability Without Compromise',
        text: ': Cost-effective design allows affordable, high-quality robots for wide access.',
      },
    ],
  },
  {
    image: slide4Image,
    title: 'Ethical AI and Value Based Partnerships',
    points: [
      {
        highlight: 'Ethical AI Development',
        text: '',
      },
      {
        highlight: 'Inclusive Design Philosophy',
        text: ': Robots designed for diverse, global populations, including developing regions and disabled users.',
      },
      {
        highlight: 'Partnerships',
        text: ' for tech subsidy and shared resources.',
      },
    ],
  },
];

function ArrowButton({
  direction,
  onClick,
  enabled,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
  enabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={!enabled}
      className={`size-[66px] rounded-full border-4 border-muted-text flex items-center justify-center transition-all cursor-pointer shrink-0 ${
        direction === 'left' ? '' : 'rotate-180'
      } ${enabled ? 'hover:border-main-text hover:bg-main-text/10' : 'opacity-50'}`}
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-main-bg py-20 flex flex-col gap-20 items-center justify-center">
      <h2 className="text-[64px] font-bold text-main-text text-center px-[100px]">
        How We Aim to Achieve Our Mission
      </h2>

      <div className="flex gap-12 items-center justify-center w-full">
        {/* Left side panel */}
        <div className="bg-[#2A2B2D] h-[456px] w-[70px] rounded-r-[40px] shrink-0" />

        {/* Left arrow */}
        <ArrowButton
          direction="left"
          onClick={scrollPrev}
          enabled={canScrollPrev}
        />

        {/* Main carousel content */}
        <div className="flex flex-col gap-[72px] items-center w-[1050px]">
          {/* Embla carousel viewport */}
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 transition-opacity duration-300"
                  style={{
                    opacity: selectedIndex === index ? 1 : 0.3,
                  }}
                >
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
                        {slide.points.map((point, pointIndex) => (
                          <li
                            key={pointIndex}
                            className="text-2xl text-main-text leading-[1.4]"
                          >
                            <span className="text-accent">{point.highlight}</span>
                            {point.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex gap-[18px] items-center">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`rounded-full transition-all cursor-pointer ${
                  index === selectedIndex
                    ? 'bg-main-text w-[55px] h-[18px]'
                    : 'border-2 border-muted-text size-[18px] hover:border-main-text'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right arrow */}
        <ArrowButton
          direction="right"
          onClick={scrollNext}
          enabled={canScrollNext}
        />

        {/* Right side panel */}
        <div className="bg-[#2A2B2D] h-[456px] w-[70px] rounded-l-[40px] shrink-0" />
      </div>
    </section>
  );
}
