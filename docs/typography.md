# Typography System

This project uses a consistent typography system through reusable components located in `src/components/Typography.tsx`. All typography components are responsive and follow a consistent sizing scale to ensure visual consistency across the entire website.

## Overview

The typography system provides four main components that replace raw HTML heading and paragraph elements:

- **HeroHeading** - For main page hero sections
- **SectionHeading** - For major section titles
- **CardTitle** - For card and subsection headings
- **BodyText** - For all paragraph text with size variants

## Components

### HeroHeading

For main hero section headings (h1). This is the largest text on the page, typically used once per page.

**Responsive sizes:** `text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`

**Default styling:**
- Font weight: Bold
- Line height: Tight
- Color: `text-main-text`

**Usage:**

```tsx
import { HeroHeading } from '../components/Typography';

<HeroHeading>Engineering What Comes Next</HeroHeading>
```

**When to use:**
- Main page title in hero sections
- Landing page headlines
- Primary page heading (one per page)

### SectionHeading

For section headings (h2). Used for major section titles throughout the site.

**Responsive sizes:** `text-3xl md:text-4xl lg:text-5xl xl:text-6xl`

**Default styling:**
- Font weight: Bold
- Color: `text-main-text`

**Usage:**

```tsx
import { SectionHeading } from '../components/Typography';

<SectionHeading>A Future Worth Building</SectionHeading>
```

**When to use:**
- Major section titles
- Page section headers
- Content area headings

### CardTitle

For card and subsection headings (h3). Used for titles within cards or subsections.

**Responsive sizes:** `text-xl md:text-2xl lg:text-3xl xl:text-4xl`

**Default styling:**
- Font weight: Semibold
- Color: `text-main-text`

**Usage:**

```tsx
import { CardTitle } from '../components/Typography';

<CardTitle>Our Challenge</CardTitle>
```

**When to use:**
- Card titles
- Subsection headings
- Component titles within sections

### BodyText

For body text and paragraphs (p). Supports three size variants to accommodate different content needs.

**Size variants:**

1. **`sm`** - Small body text
   - Classes: `text-sm md:text-base`
   - Use for: Captions, fine print, secondary information

2. **`base`** (default) - Standard body text
   - Classes: `text-base md:text-lg lg:text-xl`
   - Use for: Regular paragraphs, standard content

3. **`lg`** - Large body text
   - Classes: `text-base md:text-lg lg:text-xl xl:text-2xl`
   - Use for: Hero subtitles, prominent descriptions

**Default styling:**
- Line height: Relaxed
- Color: `text-main-text`

**Usage:**

```tsx
import { BodyText } from '../components/Typography';

// Standard size (default)
<BodyText>This is standard body text.</BodyText>

// Large size (for hero subtitles)
<BodyText size="lg">This is larger body text for hero sections.</BodyText>

// Small size (for captions)
<BodyText size="sm">This is smaller text for captions.</BodyText>
```

## Customization

All typography components accept an optional `className` prop for additional styling. This allows you to override colors, add spacing, change alignment, or apply any other Tailwind classes.

### Color Overrides

```tsx
// Override text color
<SectionHeading className="text-slate-400">Custom Color</SectionHeading>

// Use accent color
<CardTitle className="text-accent">Accent Title</CardTitle>
```

### Alignment

```tsx
// Center align
<SectionHeading className="text-center">Centered Heading</SectionHeading>

// Right align
<BodyText className="text-right">Right-aligned text</BodyText>
```

### Spacing

```tsx
// Add margin
<BodyText className="mb-4">Text with bottom margin</BodyText>

// Add padding
<CardTitle className="px-4">Title with padding</CardTitle>
```

### Font Weight

```tsx
// Override font weight
<CardTitle className="font-normal">Normal Weight Title</CardTitle>
```

### Combining Classes

```tsx
// Multiple customizations
<SectionHeading className="text-center text-slate-400 mb-8">
  Centered, Custom Color, with Margin
</SectionHeading>
```

## Usage Guidelines

### 1. Always Use Typography Components

**✅ Do:**
```tsx
import { SectionHeading } from '../components/Typography';
<SectionHeading>My Section</SectionHeading>
```

**❌ Don't:**
```tsx
<h2 className="text-3xl md:text-4xl...">My Section</h2>
```

### 2. Use Appropriate Semantic Levels

- `HeroHeading` (h1) - One per page, main title
- `SectionHeading` (h2) - Major sections
- `CardTitle` (h3) - Subsections, cards
- `BodyText` (p) - All paragraph content

### 3. Choose the Right BodyText Size

- **`lg`** - Hero subtitles, prominent descriptions
- **`base`** - Standard paragraphs, regular content
- **`sm`** - Captions, fine print, secondary info

### 4. Leverage className for Specific Needs

Use the `className` prop for:
- Color variations (e.g., `text-slate-400` for muted text)
- Alignment (e.g., `text-center`)
- Spacing (e.g., `mb-4`, `mt-8`)
- Font weight overrides (e.g., `font-normal`)

### 5. Maintain Consistency

- Don't create custom heading styles outside the typography system
- Use the predefined components for all text
- Follow the responsive sizing patterns

## Examples

### Complete Section Example

```tsx
import { HeroHeading, SectionHeading, CardTitle, BodyText } from '../components/Typography';

function ExamplePage() {
  return (
    <section>
      {/* Hero Section */}
      <HeroHeading>Welcome to Triton Droids</HeroHeading>
      <BodyText size="lg">
        Building the future of robotics, one robot at a time.
      </BodyText>
      
      {/* Main Section */}
      <SectionHeading>Our Mission</SectionHeading>
      <BodyText>
        We're dedicated to creating affordable, high-efficiency humanoid robots
        that can level the playing field in global production.
      </BodyText>
      
      {/* Card Section */}
      <CardTitle>Our Challenge</CardTitle>
      <BodyText size="sm">
        Creating robots that work in any environment.
      </BodyText>
    </section>
  );
}
```

### Custom Styling Example

```tsx
import { SectionHeading, BodyText } from '../components/Typography';

function TeamSection() {
  return (
    <section>
      <SectionHeading className="text-center mb-8">
        Our Teams
      </SectionHeading>
      <BodyText className="text-slate-400 text-center">
        Main Engineering Teams
      </BodyText>
    </section>
  );
}
```

## Color System

The typography system uses the following color tokens from `tailwind.config.js`:

- **`text-main-text`** - Default text color (`#F5F5F5`)
- **`text-muted-text`** - Muted/secondary text (`#A3B2C2`)
- **`text-accent`** - Accent color (`#FECE00`)

For custom colors, use Tailwind classes like `text-slate-400`, `text-white`, etc.

## Responsive Breakpoints

The typography system uses Tailwind's default breakpoints:

- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

Text sizes scale smoothly across these breakpoints to ensure optimal readability on all devices.
