import Carousel from '../../../components/Carousel';

import slide1Image from '../../../assets/carousel/slide-1.jpg';
import { SectionHeading, CardTitle } from '../../../components/Typography';
import slide2Image from '../../../assets/carousel/slide-2.jpg';
import slide3Image from '../../../assets/carousel/slide-3.jpg';
import slide4Image from '../../../assets/carousel/slide-4.jpg';

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

export default function AchieveSection() {
  return (
    <section className="bg-main-bg py-12 md:py-16 lg:py-20 flex flex-col gap-10 md:gap-16 lg:gap-20 items-center justify-center overflow-hidden">
      <SectionHeading className="w-full text-left px-6 md:px-12 lg:px-20 xl:px-[100px]">
        How We Aim to Achieve Our Mission
      </SectionHeading>

      <div className="flex flex-col gap-12 md:gap-16 lg:gap-[72px] items-center w-full">
        <Carousel
          renderSlide={(slide, _index, tweenValue) => {
            const scale = 0.85 + tweenValue * 0.15;
            const opacity = 0.3 + tweenValue * 0.7;

            return (
              <div
                className="transition-transform duration-100 ease-out origin-center"
                style={{
                  transform: `scale(${scale})`,
                  opacity: opacity,
                }}
              >
                <div className="bg-[#2A2B2D] rounded-[24px] md:rounded-[32px] lg:rounded-[40px] flex flex-col lg:flex-row gap-4 md:gap-6 items-center w-full overflow-hidden">
                  <div className="w-full lg:w-[513px] h-[300px] md:h-[400px] lg:h-[595px] shrink-0 p-4 md:p-6 lg:p-10 lg:pr-4">
                    <div className="w-full h-full rounded-[16px] md:rounded-[24px] lg:rounded-[32px] overflow-hidden">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-10 flex-1">
                    <CardTitle>{slide.title}</CardTitle>
                    <ul className="flex flex-col gap-4 md:gap-5 lg:gap-6 list-disc ml-6 md:ml-8 lg:ml-9">
                      {slide.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="text-base font-light md:text-lg lg:text-xl xl:text-2xl text-main-text leading-relaxed"
                        >
                          <span className="text-accent">{point.highlight}</span>
                          {point.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          }}
          slides={slides}
        />
      </div>
    </section>
  );
}
