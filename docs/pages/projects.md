# Projects Page

The Projects page provides detailed information about Triton Droids' various robotics projects.

**Location:** `src/pages/Projects/Projects.tsx`  
**Route:** `/projects`

## Overview

The Projects page is currently a placeholder page. It is intended to showcase detailed information about the organization's projects, including:

- **Humanoid Robot** - General-purpose humanoid robots
- **Triton Pupper** - Robotic dog project
- **RoboCup** - Competition participation

## Current Status

The page currently contains minimal content and is a placeholder for future development:

```tsx
export default function Projects() {
  return <div>{/* Projects page content */}</div>;
}
```

## Future Implementation

This page should likely include:
- Detailed project descriptions
- Project timelines and milestones
- Team information for each project
- Technical specifications
- Project images and media
- Links to related resources

## Related Components

Project information is currently showcased in:
- **Home Page** - `ProjectsSection` component provides an overview
- Individual project pages may be created (e.g., `/projects/humanoid`, `/projects/pupper`, `/projects/robocup`)

## Assets

Project-related assets are located in:
- `src/assets/projects/` - Project icons and images
  - `humanoid-icon-blue.svg` / `humanoid-icon-gray.svg`
  - `pupper-icon-blue.svg` / `pupper-icon-gray.svg`
  - `robocup-icon-blue.svg` / `robocup-icon-gray.svg`
  - `humanoid-image.jpg`
  - `pupper-image.jpg`
  - `robocup-image.png`
