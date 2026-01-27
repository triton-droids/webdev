# Join Page

The Join page provides information about joining Triton Droids, including team descriptions, recruitment process, and benefits.

**Location:** `src/pages/Join/Join.tsx`  
**Route:** `/join`

## Overview

The Join page is designed to attract new members and provide comprehensive information about:
- Why to join Triton Droids
- The recruitment process
- Available teams and roles
- Benefits of membership

## Sections

### JoinHeroSection

**Location:** `src/pages/Join/components/JoinHeroSection.tsx`

The hero section featuring:
- Large heading: "Join the Team"
- Team presentation image from Figma
- Full-width responsive image container

**Features:**
- Responsive image sizing and rounded corners
- Image positioned from Figma asset

### JoinCTASection

**Location:** `src/pages/Join/components/JoinCTASection.tsx`

Call-to-action section encouraging visitors to apply or learn more.

### WhyJoinCarousel

**Location:** `src/pages/Join/components/WhyJoinCarousel.tsx`

An interactive carousel highlighting the benefits of joining Triton Droids. Uses the `Carousel` component to showcase reasons to join.

**Features:**
- Smooth carousel transitions
- Multiple benefit slides
- Visual presentation of advantages

### RecruitmentProcess

**Location:** `src/pages/Join/components/RecruitmentProcess.tsx`

An interactive section explaining the recruitment process, likely featuring step-by-step information about how to join.

**Features:**
- Step-by-step process visualization
- Interactive elements for engagement

### OurTeamsSection

**Location:** `src/pages/Join/components/OurTeamsSection.tsx`

Overview section introducing the various teams within Triton Droids.

### HumanoidTeamsSection

**Location:** `src/pages/Join/components/HumanoidTeamsSection.tsx`

Detailed information about teams working on the Humanoid Robot project, including:
- Mechanical Engineering
- Electrical Engineering
- Embedded Systems
- Machine Learning

### PupperTeamsSection

**Location:** `src/pages/Join/components/PupperTeamsSection.tsx`

Information about teams working on the Triton Pupper project, with similar team breakdowns as Humanoid.

### InternalOpsSection

**Location:** `src/pages/Join/components/InternalOpsSection.tsx`

Information about internal operations teams such as:
- Business/Operations
- Design
- Marketing
- Software/Web Development

### TeamCard

**Location:** `src/pages/Join/components/TeamCard.tsx`

Reusable card component for displaying team information, likely used in team sections.

## Component Structure

```tsx
export default function Join() {
  return (
    <div className="bg-main-bg min-h-screen">
      <div className="flex flex-col items-center">
        <JoinHeroSection />
        <JoinCTASection />
        <WhyJoinCarousel />
        <RecruitmentProcess />
        <OurTeamsSection />
      </div>
    </div>
  );
}
```

## Styling

- Full-page background: `bg-main-bg min-h-screen`
- Centered content container
- Consistent spacing and responsive design

## Dependencies

- Typography components
- Carousel component
- Team-related icons from `src/assets/join/` and `src/assets/humanoid/`, `src/assets/pupper/`
