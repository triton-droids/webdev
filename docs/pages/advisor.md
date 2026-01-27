# Advisor Page

The Advisor page showcases the advisory board and academic advisors who guide Triton Droids.

**Location:** `src/pages/Advisor/Advisor.tsx`  
**Route:** `/advisor`

## Overview

The Advisor page displays information about the people who provide guidance and support to Triton Droids:

1. **Academic Advisor** - Primary academic advisor
2. **Advisory Board** - Board of advisors

## Structure

### Hero Section

The page opens with:
- Large heading: "OUR ADVISORS"
- Descriptive paragraph explaining the role of advisors in shaping the team's direction

### Academic Advisor Section

Displays information about the primary academic advisor.

### Advisory Board Section

Shows members of the advisory board.

## Current Implementation

```tsx
export default function Advisor() {
  return (
    <>
      <h1 className="text-8xl font-bold">OUR ADVISORS</h1>
      <p className="text-xl mt-4">
        Meet our advisory board! Their experience and encouragement play a huge
        role in shaping our team&apos;s direction, and we&apos;re grateful to
        have them as part of Triton Droids.
      </p>

      <section className="advisor mt-8">
        <h2 className="text-5xl font-bold">OUR ACADEMIC ADVISOR</h2>
      </section>

      <section className="advisory-board mt-8">
        <h2 className="text-5xl font-bold">OUR ADVISORY BOARD</h2>
      </section>
    </>
  );
}
```

## Notes

- Currently uses raw HTML elements instead of Typography components
- Sections are structured but content is placeholder
- Advisor cards/components should be added
- Consider using Typography components for consistency

## Future Enhancements

- Replace raw HTML with Typography components (`HeroHeading`, `SectionHeading`, `BodyText`)
- Add advisor cards with photos, names, titles, and bios
- Include affiliations (universities, companies)
- Add contact information or links
- Responsive grid layout for advisory board members
- Consistent styling with other pages
