# Sponsorship Page

The Sponsorship page provides information about supporting Triton Droids through donations and sponsorships.

**Location:** `src/pages/Sponsorship/Sponsorship.tsx`  
**Route:** `/sponsorship`

## Overview

The Sponsorship page encourages donations and sponsorships by explaining:
- How donations directly fund the project
- Sponsorship tier levels
- Current sponsors
- Ways to contribute (monetary, parts, mentorship)

## Sections

### Hero Section

**Features:**
- Heading: "Fund a Droid. Make a Difference"
- Description explaining how donations fund components, tools, and materials
- Emphasizes student experience and skill development

### Sponsorship Information Section

**Features:**
- Two-column layout (text and image)
- Heading: "No contribution is too small"
- Information about sponsorship tiers
- Mentions monetary donations, parts, and mentorship
- Build cost image showing estimated expenses
- Two action buttons:
  - **Sponsorship Package** (blue button)
  - **Donate Now** (yellow/accent button)

### Current Sponsors Section

**Features:**
- Heading: "Current Sponsors"
- "view all" link (placeholder)
- Logo grid displaying sponsor logos:
  - HEIDENHAIN
  - Ansys
  - Onshape
- Responsive logo containers with consistent sizing

## Component Structure

```tsx
export default function Sponsorship() {
  return (
    <>
      {/* Hero Section */}
      <section>...</section>

      {/* Sponsorship Info Section */}
      <section>...</section>

      {/* Current Sponsors Section */}
      <section>...</section>
    </>
  );
}
```

## Typography Usage

The page properly uses Typography components:
- `HeroHeading` for main page title
- `SectionHeading` for section titles
- `BodyText` for paragraph content

## Assets

- `build-cost.png` - Estimated build cost visualization
- `heidenhain.png` - HEIDENHAIN sponsor logo
- `ansys.png` - Ansys sponsor logo
- `onshape.png` - Onshape sponsor logo

## Styling

- Consistent responsive padding: `py-8 md:py-12 lg:py-16 px-6 md:px-12 lg:px-20`
- Grid layouts for responsive design
- Button styling with hover effects
- Logo containers with consistent min-height and sizing

## Call-to-Action Buttons

Two primary action buttons:
1. **Sponsorship Package** - Blue button (`bg-blue-500`)
2. **Donate Now** - Yellow/accent button (`bg-yellow-400`)

Both buttons feature:
- Responsive padding and text sizing
- Hover effects (background/text color swap)
- Border transitions
- Rounded button corners
