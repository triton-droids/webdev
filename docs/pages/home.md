# Home Page

The Home page is the main landing page of the Triton Droids website, showcasing the organization's mission, vision, and projects.

**Location:** `src/pages/Home/Home.tsx`  
**Route:** `/`

## Overview

The Home page is composed of five main sections that introduce visitors to Triton Droids:

1. **HeroSection** - Main hero with call-to-action buttons
2. **VisionSection** - Three-column vision cards
3. **AchieveSection** - Carousel explaining how the mission is achieved
4. **ProjectsSection** - Interactive projects showcase
5. **RecruitmentSection** - Recruitment status banner

## Sections

### HeroSection

**Location:** `src/pages/Home/components/HeroSection.tsx`

The main hero section featuring:
- Large hero heading: "Engineering What Comes Next"
- Descriptive subtitle about building autonomous humanoid robots
- Background image with blend mode effects
- Two call-to-action buttons:
  - "Our Projects" (links to #projects anchor)
  - "Join Us" (links to `/join` route)

**Features:**
- Responsive background image positioning
- Full-width layout with max-width constraint
- Responsive typography and spacing

### VisionSection

**Location:** `src/pages/Home/components/VisionSection.tsx`

A three-column card layout displaying the organization's core values:

1. **Our Challenge** - Creating affordable, high-efficiency humanoid robots
2. **Our Mission** - Designing robots for any environment and empowering communities
3. **Our Focus** - Bridging the tech gap with $2 trillion potential impact

**Features:**
- Three responsive cards with icons
- Accent color highlights for key phrases
- Responsive grid layout (stacks on mobile, horizontal on desktop)

### AchieveSection

**Location:** `src/pages/Home/components/AchieveSection.tsx`

An interactive carousel showcasing how Triton Droids aims to achieve its mission. Uses the `Carousel` component with four slides:

1. **Leveraging UCSD's Unique Assets** - Faculty collaboration, student network, data infrastructure
2. **Focus on Equity and Global Impact** - Addressing global production disparities
3. **Modular and Scalable Robotics Solutions** - Customizable platforms and affordability
4. **Ethical AI and Value Based Partnerships** - Inclusive design and partnerships

**Features:**
- Smooth carousel transitions with scale and opacity animations
- Each slide contains an image and bullet points with highlighted text
- Responsive image and content layout

### ProjectsSection

**Location:** `src/pages/Home/components/ProjectsSection.tsx`

An interactive project showcase featuring three main projects:

1. **Humanoid Robot** - General-purpose humanoid robots for various applications
2. **Triton Pupper** - Robotic dog project for undergraduate students
3. **RoboCup** - Participation in RoboCup 2027 competition

**Features:**
- Interactive project selector with icons
- Active project indicator (blue icon and underline)
- Project card with description and image
- "Learn More" link for each project
- State management for active project selection

### RecruitmentSection

**Location:** `src/pages/Home/components/RecruitmentSection.tsx`

A banner section displaying current recruitment status and call-to-action.

## Component Structure

```tsx
export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <AchieveSection />
      <ProjectsSection />
      <RecruitmentSection />
    </>
  );
}
```

## Styling

- Uses `bg-main-bg` for consistent background
- Responsive padding: `px-6 md:px-12 lg:px-20 xl:px-[100px]`
- Consistent gap spacing: `gap-10 md:gap-16 lg:gap-20`
- Typography components from `Typography.tsx`

## Dependencies

- React Router (`Link` component for navigation)
- Typography components (`HeroHeading`, `SectionHeading`, `CardTitle`, `BodyText`)
- Carousel component for AchieveSection
- Various image assets from `src/assets/`
