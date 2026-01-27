# Development Guide

This guide covers development setup, conventions, and best practices for the Triton Droids website.

## Getting Started

### Prerequisites

- **Node.js** 20 or higher
- **npm** or **yarn** package manager
- **Git** for version control

### Initial Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Development Workflow

### Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check for code issues
- **`npm run lint:fix`** - Automatically fix ESLint issues
- **`npm run format`** - Format code with Prettier
- **`npm run format:check`** - Check code formatting

### Code Quality

#### Linting

The project uses ESLint with TypeScript support. Run linting before committing:

```bash
npm run lint
```

Common issues are automatically fixable:
```bash
npm run lint:fix
```

#### Formatting

Code is formatted with Prettier. Format all files:
```bash
npm run format
```

Check formatting without making changes:
```bash
npm run format:check
```

## Project Structure

```
src/
  ├── components/          # Reusable React components
  │   ├── Typography.tsx  # Typography system components
  │   ├── Header.tsx      # Site header/navigation
  │   ├── Footer.tsx      # Site footer
  │   ├── Layout.tsx      # Main layout wrapper
  │   ├── Carousel.tsx    # Carousel component
  │   ├── join/          # Join page components
  │   └── pupper/        # Pupper project components
  ├── pages/             # Page components (routes)
  ├── assets/            # Static assets (images, icons)
  ├── App.tsx            # Main app component with routing
  ├── main.tsx           # Application entry point
  └── index.css          # Global styles and Tailwind imports
```

## Development Conventions

### TypeScript

- Use TypeScript for all new components
- Define interfaces for component props
- Avoid `any` types - use proper typing

**Example:**
```tsx
interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
}

export default function Component({ title, description, className = '' }: ComponentProps) {
  return <div className={className}>{title}</div>;
}
```

### Component Naming

- Use PascalCase for component names
- Match component file names to component names
- Use descriptive, semantic names

**Examples:**
- ✅ `HeroSection.tsx` → `HeroSection`
- ✅ `JoinCTASection.tsx` → `JoinCTASection`
- ❌ `hero.tsx` → `Hero`

### File Organization

- One component per file
- Co-locate related components in folders
- Use index files for clean imports when appropriate

### Styling

#### Tailwind CSS

- Use Tailwind utility classes for styling
- Prefer utility classes over custom CSS
- Use responsive prefixes (`md:`, `lg:`, `xl:`)

**Example:**
```tsx
<div className="flex flex-col md:flex-row gap-4 md:gap-6">
  {/* Content */}
</div>
```

#### Custom Colors

Use color tokens from `tailwind.config.js`:
- `bg-main-bg` - Main background
- `text-main-text` - Main text color
- `text-muted-text` - Muted text
- `text-accent` - Accent color
- `bg-accent` - Accent background

#### Typography

**Always use Typography components** instead of raw HTML:
- `HeroHeading` for h1
- `SectionHeading` for h2
- `CardTitle` for h3
- `BodyText` for paragraphs

See [Typography Documentation](./typography.md) for details.

### Responsive Design

- Mobile-first approach
- Test on multiple screen sizes
- Use responsive Tailwind classes

**Breakpoints:**
- `md:` - 768px and up (tablets)
- `lg:` - 1024px and up (desktops)
- `xl:` - 1280px and up (large desktops)
- `2xl:` - 1536px and up (extra large)

### State Management

- Use React hooks (`useState`, `useEffect`) for local state
- Keep state as local as possible
- Use props for parent-child communication

### Routing

The project uses React Router for client-side routing.

**Adding a new route:**

1. Create a page component in `src/pages/`
2. Add route in `src/App.tsx`:
```tsx
<Route path="/new-page" element={<NewPage />} />
```
3. Add navigation link in `src/components/Header.tsx` if needed

## Dev Container

The project includes a Dev Container configuration for VS Code.

### Using Dev Container

1. Open project in VS Code
2. When prompted, click "Reopen in Container"
3. Or use Command Palette: `Dev Containers: Reopen in Container`

The container automatically:
- Sets up the development environment
- Installs dependencies
- Configures the workspace

## Git Workflow

### Branch Naming

- `main` - Production-ready code
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates

### Commit Messages

Use clear, descriptive commit messages:
- ✅ `feat: add typography system components`
- ✅ `fix: resolve carousel animation issue`
- ✅ `docs: update development guide`
- ❌ `fix stuff`
- ❌ `update`

### Before Committing

1. Run linter: `npm run lint`
2. Format code: `npm run format`
3. Test locally: `npm run dev`
4. Build test: `npm run build`

## Common Tasks

### Adding a New Component

1. Create component file in appropriate directory
2. Use TypeScript with proper typing
3. Use Typography components for text
4. Make it responsive
5. Add to appropriate page or import where needed

### Adding a New Page

1. Create page component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `Header.tsx` if needed
4. Use `Layout` component to wrap page content

### Modifying Styles

1. Use Tailwind classes when possible
2. Modify `tailwind.config.js` for custom tokens
3. Add custom CSS in `index.css` only if necessary

## Troubleshooting

### Build Errors

- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Check Node.js version: `node --version` (should be 20+)

### TypeScript Errors

- Ensure all imports are correct
- Check that types are properly defined
- Run `npm run lint` to see detailed errors

### Styling Issues

- Check Tailwind classes are correct
- Verify `tailwind.config.js` has correct content paths
- Ensure PostCSS is configured properly

## Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
