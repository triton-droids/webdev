# Alumni Page

The Alumni page celebrates former members of Triton Droids who have contributed to the organization.

**Location:** `src/pages/Alumni/Alumni.tsx`  
**Route:** `/alumni`

## Overview

The Alumni page honors and showcases former members who helped build Triton Droids and continue to inspire current members.

## Structure

### Hero Section

The page currently contains:
- Large heading: "OUR ALUMNI"
- Descriptive paragraph about celebrating alumni and their contributions

## Current Implementation

```tsx
export default function Alumni() {
  return (
    <>
      <h1 className="text-8xl font-bold">OUR ALUMNI</h1>
      <p className="text-xl mt-4">
        Meet our alumni! We are proud to celebrate the people who helped build
        Triton Droids and continue to inspire us long after their time at UC San
        Diego.
      </p>
    </>
  );
}
```

## Notes

- Currently uses raw HTML elements instead of Typography components
- Minimal content - placeholder for future development
- Alumni member cards/components should be added
- Consider using Typography components for consistency

## Future Enhancements

- Replace raw HTML with Typography components (`HeroHeading`, `BodyText`)
- Add alumni member cards with:
  - Photos
  - Names
  - Graduation years
  - Current positions/companies
  - Contributions to Triton Droids
- Implement filtering by:
  - Graduation year
  - Current company/industry
  - Project involvement
- Add social media links (LinkedIn, etc.)
- Responsive grid layout for alumni members
- Search functionality
- Consistent styling with other pages
