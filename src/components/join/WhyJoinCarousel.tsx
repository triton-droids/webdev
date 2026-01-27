import Carousel from '../Carousel';
import { SectionHeading, CardTitle, BodyText } from '../Typography';

const slide1Image =
  'https://www.figma.com/api/mcp/asset/e5765e1e-d063-4905-a164-dbf2388ca35a';
const slide2Image =
  'https://www.figma.com/api/mcp/asset/707c4e7c-5ab3-4893-a606-7c1fa1e9eb21';
const slide3Image =
  'https://www.figma.com/api/mcp/asset/7df99e02-f063-40d1-bde6-861e40bc7be3';
const slide4Image =
  'https://www.figma.com/api/mcp/asset/499b1824-7e2f-4e6a-b8de-d5e77760d2d9';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Real world impact',
    description:
      "Here, you won't just be tinkering in a lab. You'll be working on projects that have the potential to make a global difference. Imagine seeing something you helped build in action—whether it's improving agricultural practices in developing countries or disaster response capabilities.",
    image: slide1Image,
  },
  {
    id: 2,
    title: 'Hands-on experience',
    description:
      "As an engineering or science student, you want to get your hands dirty. At Triton Droids, you'll dive into the nitty-gritty of robotics, AI, and engineering design. You'll collaborate with fellow students and experts, turning theories into working prototypes.",
    image: slide2Image,
  },
  {
    id: 3,
    title: 'Jobs, internships, and more',
    description:
      "Whether you're looking to beef up your resume, gain practical skills, or start a career in robotics and AI, Triton Droids gives you the platform to do it. The projects you work on here can set you apart in job interviews, graduate school applications, or even your startup ambitions.",
    image: slide3Image,
  },
  {
    id: 4,
    title: 'Life long connections',
    description:
      "Joining Triton Droids isn't just about the robots—it's about the people. You'll form connections with like-minded students, industry professionals, and mentors that will last well beyond your college years.",
    image: slide4Image,
  },
];

export default function WhyJoinCarousel() {
  return (
    <section className="flex flex-col gap-10 lg:gap-20 items-center w-full">
      <div className="w-full max-w-[1228px] mx-auto px-6">
        <SectionHeading>Why join Triton Droids?</SectionHeading>
      </div>

      <Carousel
        slides={slides}
        slideClassName="flex-[0_0_75%] min-w-0 pl-4 pr-4"
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
              <div className="w-full max-w-[1050px] bg-[#2A2B2D] rounded-[24px] lg:rounded-[40px] flex flex-col md:flex-row gap-4 md:gap-6 items-center">
                <div className="w-full md:w-[320px] lg:w-[420px] xl:w-[513px] h-[250px] md:h-[380px] lg:h-[480px] xl:h-[595px] pl-4 md:pl-6 lg:pl-10 pr-2 md:pr-3 lg:pr-4 py-4 md:py-6 lg:py-10 shrink-0">
                  <div className="w-full h-full rounded-[16px] lg:rounded-[32px] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:gap-5 lg:gap-6 px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8">
                  <CardTitle className="font-bold leading-tight">
                    {slide.title}
                  </CardTitle>
                  <BodyText>{slide.description}</BodyText>
                </div>
              </div>
            </div>
          );
        }}
      />
    </section>
  );
}
