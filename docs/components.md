# Components Documentation

This document provides an overview of the reusable components in the Triton Droids website.

For information about individual pages, see the [Pages Documentation](./pages/README.md).

## Core Components

### Typography Components

See [Typography Documentation](./typography.md) for detailed information about typography components.

### Layout Components

#### `Layout`
Main layout wrapper that includes Header and Footer.

**Location:** `src/components/Layout.tsx`

**Usage:**
```tsx
import Layout from '../components/Layout';

function App() {
  return (
    <Layout>
      {/* Page content */}
    </Layout>
  );
}
```

#### `Header`
Site navigation header with logo, navigation links, and dropdown menus.

**Location:** `src/components/Header.tsx`

**Features:**
- Responsive navigation
- Dropdown menus for nested navigation
- Active route highlighting
- Donate button

#### `Footer`
Site footer with links, social media, and organization information.

**Location:** `src/components/Footer.tsx`

### Carousel Component

#### `Carousel`
A flexible, reusable carousel component built with Embla Carousel.

**Location:** `src/components/Carousel.tsx`

**Features:**
- Smooth scrolling with tween animations
- Customizable slide rendering
- Optional arrow buttons
- Optional pagination dots
- Fully responsive
- Loop support

**Props:**
```tsx
interface CarouselProps<T> {
  slides: T[];                    // Array of slide data
  className?: string;              // Container className
  slideClassName?: string;         // Individual slide className
  containerClassName?: string;     // Inner container className
  renderSlide: (slide: T, index: number, tweenValue: number) => ReactNode;
  renderArrowButton?: (direction: 'left' | 'right', onClick: () => void, disabled: boolean) => ReactNode;
  renderPagination?: (total: number, selectedIndex: number, onDotClick: (index: number) => void) => ReactNode;
  showArrows?: boolean;            // Default: true
  showPagination?: boolean;         // Default: true
}
```

**Usage Example:**
```tsx
import Carousel from '../components/Carousel';

const slides = [
  { id: 1, title: 'Slide 1', image: '...' },
  { id: 2, title: 'Slide 2', image: '...' },
];

<Carousel
  slides={slides}
  renderSlide={(slide, index, tweenValue) => {
    const scale = 0.85 + tweenValue * 0.15;
    return (
      <div style={{ transform: `scale(${scale})` }}>
        <h3>{slide.title}</h3>
        <img src={slide.image} alt={slide.title} />
      </div>
    );
  }}
/>
```

**Used in:**
- `AchieveSection` - Mission achievement carousel
- `WhyJoinCarousel` - Reasons to join carousel

### Navigation Components

#### `NavDropdown`
Dropdown menu component for navigation items.

**Location:** `src/components/NavDropdown.tsx`

**Features:**
- Hover-triggered dropdowns
- Smooth animations
- Keyboard navigation support

## Page-Specific Components

For detailed information about each page and its components, see the [Pages Documentation](./pages/README.md).

### Home Page Components

**Location:** `src/pages/Home/components/`

- **`HeroSection`** - Main hero section with background image and call-to-action buttons
- **`VisionSection`** - Three-column vision cards section
- **`AchieveSection`** - Carousel section explaining how the mission is achieved
- **`ProjectsSection`** - Interactive projects showcase with icons and descriptions
- **`RecruitmentSection`** - Recruitment status banner

### Join Page Components

**Location:** `src/pages/Join/components/`

- **`JoinHeroSection`** - Join page hero
- **`JoinCTASection`** - Call-to-action section
- **`WhyJoinCarousel`** - Benefits carousel
- **`RecruitmentProcess`** - Interactive recruitment steps
- **`OurTeamsSection`** - Teams overview
- **`HumanoidTeamsSection`** - Humanoid project teams
- **`InternalOpsSection`** - Internal operations teams
- **`PupperTeamsSection`** - Pupper project teams
- **`TeamCard`** - Reusable team information card

## Component Patterns

### Responsive Design

All components use Tailwind's responsive breakpoints:
- Mobile-first approach
- Breakpoints: `md:`, `lg:`, `xl:`, `2xl:`
- Consistent spacing and sizing scales

### Styling Conventions

- Use Tailwind utility classes
- Custom colors from `tailwind.config.js`
- Consistent border radius (`rounded-button`, `rounded-card`)
- Dark theme with `bg-main-bg` and `text-main-text`

### Component Structure

```tsx
// Standard component structure
import { TypographyComponent } from './Typography';

interface ComponentProps {
  // Props definition
}

export default function Component({ props }: ComponentProps) {
  return (
    <section className="responsive-classes">
      <TypographyComponent>Content</TypographyComponent>
    </section>
  );
}
```

## Best Practices

1. **Use Typography Components** - Always use components from `Typography.tsx` instead of raw HTML elements
2. **Responsive First** - Design mobile-first, then enhance for larger screens
3. **Consistent Spacing** - Use the spacing scale (gap-4, gap-6, gap-8, etc.)
4. **Semantic HTML** - Use appropriate HTML elements (section, article, etc.)
5. **Accessibility** - Include proper alt text, ARIA labels where needed
6. **Type Safety** - Use TypeScript interfaces for all props
