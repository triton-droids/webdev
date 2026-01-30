# Triton Droids

A React + Vite + Tailwind CSS website for Triton Droids, UCSD's humanoid robotics club.

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Testing

This project includes end-to-end tests using Playwright to ensure UI components work correctly.

### Running Tests

```bash
# Run all tests
npm run test:e2e

# Run tests with UI mode (interactive)
npm run test:e2e:ui

# Run visual tests only
npm run test:e2e:visual
```

For detailed information about the testing setup, see [Testing Documentation](./docs/testing.md).

## Dev Container

This project includes a Dev Container configuration. To use it:

1. Open the project in VS Code
2. When prompted, click "Reopen in Container"
3. Or use the Command Palette: `Dev Containers: Reopen in Container`

The container will automatically install dependencies on first launch.

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Project Structure

```
src/
  ├── components/     # Reusable components
  │   └── Typography.tsx  # Typography components
  ├── pages/          # Page components
  ├── App.tsx         # Main app component with routing
  ├── main.tsx        # Entry point
  └── index.css       # Global styles with Tailwind
docs/
  ├── typography.md   # Typography system documentation
  ├── components.md   # Component documentation
  ├── pages/          # Page documentation
  │   ├── README.md   # Pages overview
  │   ├── home.md     # Home page documentation
  │   ├── join.md     # Join page documentation
  │   ├── projects.md # Projects page documentation
  │   ├── team.md     # Team page documentation
  │   ├── sponsorship.md # Sponsorship page documentation
  │   ├── advisor.md  # Advisor page documentation
  │   └── alumni.md   # Alumni page documentation
  ├── development.md  # Development guide
  └── deployment.md   # Deployment guide
```

## Documentation

Comprehensive documentation is available in the [`docs/`](./docs/) folder:

- **[Typography System](./docs/typography.md)** - Complete guide to the typography system, including all components, usage examples, and customization options
- **[Components](./docs/components.md)** - Overview of reusable components and their usage
- **[Pages](./docs/pages/README.md)** - Detailed documentation for each page in the website
- **[Development Guide](./docs/development.md)** - Development setup, conventions, and best practices
- **[Testing Guide](./docs/testing.md)** - End-to-end testing with Playwright, including setup, writing tests, and CI/CD integration
- **[Deployment Guide](./docs/deployment.md)** - How to deploy the website to production

### Quick Typography Reference

This project uses a consistent typography system through reusable components. For detailed documentation, see [Typography Documentation](./docs/typography.md).

**Available Components:**
- `HeroHeading` - For main page hero sections (h1)
- `SectionHeading` - For major section titles (h2)
- `CardTitle` - For card and subsection headings (h3)
- `BodyText` - For paragraphs with size variants (`sm`, `base`, `lg`)

**Quick Example:**
```tsx
import { HeroHeading, SectionHeading, BodyText } from '../components/Typography';

<HeroHeading>Page Title</HeroHeading>
<BodyText size="lg">Hero subtitle</BodyText>
<SectionHeading>Section Title</SectionHeading>
<BodyText>Regular paragraph text.</BodyText>
```
