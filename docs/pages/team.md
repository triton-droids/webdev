# Team Page

The Team page showcases the members of Triton Droids, organized by roles and responsibilities.

**Location:** `src/pages/Team/Team.tsx`  
**Route:** `/team`

## Overview

The Team page displays information about the organization's members, organized into different categories:

1. **Executive Board** - Leadership team
2. **Team Leads** - Project and department leaders
3. **Robothon Chairs** - Event organizers

## Structure

### Hero Section

The page opens with:
- Large heading: "MEET THE TEAM"
- Descriptive paragraph about the team members
- Team photo (placeholder image)

### Executive Board Section

Displays members of the executive board with their roles and information.

### Team Leads Section

Shows team leads for various projects and departments.

### Robothon Chairs Section

Features chairs responsible for organizing Robothon events.

## Current Implementation

```tsx
export default function Team() {
  return (
    <>
      <h1 className="text-8xl font-bold">MEET THE TEAM</h1>
      <p className="text-xl mt-4">
        Meet our talented team! Each member brings unique skills and
        experiences, contributing to our collective success. Learn more about
        their backgrounds and expertise below.
      </p>
      <img alt="Team photo" />

      <hr className="border-muted-text/20 my-8" />

      <section className="executives">
        <h2 className="text-5xl font-bold">Executive Board</h2>
      </section>

      <hr className="border-muted-text/20 my-8" />

      <section className="team-leads">
        <h2 className="text-5xl font-bold">Team Leads</h2>
      </section>

      <hr className="border-muted-text/20 my-8" />

      <section className="robothon-chairs">
        <h2 className="text-5xl font-bold">Robothon Chairs</h2>
      </section>
    </>
  );
}
```

## Notes

- Currently uses raw HTML elements instead of Typography components
- Sections are structured but content is placeholder
- Team member cards/components should be added
- Consider using Typography components for consistency

## Future Enhancements

- Replace raw HTML with Typography components
- Add team member cards with photos and bios
- Implement filtering or search functionality
- Add social media links for team members
- Responsive grid layout for team members
