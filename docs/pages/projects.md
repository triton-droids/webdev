# Projects

Projects are split into an overview page and separate project pages.

**Routes:** `/projects` (index), `/projects/humanoid`, `/projects/learning-projects`, `/projects/robocup`

## Overview

- **Index** (`/projects`) – ProjectsSection with three project cards and Learn More links.
- **Humanoid** (`/projects/humanoid`) – Hero, detail cards, 3D viewer, gallery.
- **Learning Projects** (`/projects/learning-projects`) – Hero and description (placeholder).
- **RoboCup** (`/projects/robocup`) – Hero, What is RoboCup and Our Goal cards.

## Page Structure

```
src/pages/Projects/
  ├── ProjectsIndex.tsx          # /projects
  ├── Humanoid.tsx               # /projects/humanoid
  ├── LearningProjects.tsx       # /projects/learning-projects
  ├── RoboCup.tsx                # /projects/robocup
  ├── ProjectsSection.tsx        # Overview (Home + index)
  └── components/
      ├── Projects.tsx           # Re-exports ProjectsIndex
      ├── ProjectHeroSection.tsx
      ├── ProjectDetailCard.tsx
      ├── ProjectGallery.tsx
      └── ModelViewer.tsx
```

## Components

### ProjectHeroSection

Displays the project title, description, and ASCII art asset.

### ProjectDetailCard

Reusable card component with:

- Icon (88px, centered)
- Title (64px, gray #A3B2C2)
- Description (24px, white)
- Fixed width layout for alignment

### ProjectGallery

Image carousel using `embla-carousel-react` with:

- Navigation arrows
- Pagination dots
- Smooth transitions

### ModelViewer

Placeholder for 3D model integration (Three.js, model-viewer, or Sketchfab).

## Related Components

- **ProjectsSection** (`src/pages/Projects/ProjectsSection.tsx`) - Overview component used on Home page

## Assets

Project-related assets are located in:

- `src/assets/projects/` - Project icons and images
  - `humanoid-icon-blue.svg` / `humanoid-icon-gray.svg`
  - `pupper-icon-blue.svg` / `pupper-icon-gray.svg`
  - `robocup-icon-blue.svg` / `robocup-icon-gray.svg`
  - `humanoid-image.jpg`
  - `pupper-image.jpg`
  - `robocup-image.png`
  - `icons/rationale-icon.svg`
  - `icons/function-icon.svg`
  - `icons/approach-icon.svg`
  - `icons/progress-icon.svg`
  - `icons/what-is-robocup-icon.svg`
  - `icons/our-goal-icon.svg`
  - `hero/ascii-art.png`
