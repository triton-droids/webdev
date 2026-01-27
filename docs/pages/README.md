# Pages Documentation

This directory contains documentation for each page in the Triton Droids website.

## Available Pages

### [Home](./home.md)
The main landing page featuring hero section, vision cards, mission carousel, projects showcase, and recruitment banner.

**Route:** `/`

### [Join](./join.md)
Information about joining Triton Droids, including team descriptions, recruitment process, and benefits.

**Route:** `/join`

### [Projects](./projects.md)
Detailed information about Triton Droids' robotics projects (currently placeholder).

**Route:** `/projects`

### [Team](./team.md)
Showcases team members organized by roles: Executive Board, Team Leads, and Robothon Chairs.

**Route:** `/team`

### [Sponsorship](./sponsorship.md)
Information about supporting Triton Droids through donations and sponsorships, including current sponsors.

**Route:** `/sponsorship`

### [Advisor](./advisor.md)
Displays information about the advisory board and academic advisors.

**Route:** `/advisor`

### [Alumni](./alumni.md)
Celebrates former members who contributed to Triton Droids.

**Route:** `/alumni`

## Page Structure

All pages are located in `src/pages/` and follow a consistent structure:

```
src/pages/
  ├── PageName/
  │   ├── PageName.tsx          # Main page component
  │   └── components/            # Page-specific components (optional)
  │       └── ComponentName.tsx
```

## Routing

Pages are registered in `src/App.tsx` using React Router:

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/join" element={<Join />} />
  <Route path="/team" element={<Team />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/sponsorship" element={<Sponsorship />} />
  <Route path="/advisor" element={<Advisor />} />
  <Route path="/alumni" element={<Alumni />} />
</Routes>
```

## Common Patterns

### Layout Wrapper

All pages are wrapped in the `Layout` component which includes the Header and Footer:

```tsx
<Layout>
  <Routes>
    {/* Routes */}
  </Routes>
</Layout>
```

### Typography Components

Pages should use Typography components from `src/components/Typography.tsx`:
- `HeroHeading` - Main page titles
- `SectionHeading` - Section headings
- `CardTitle` - Card/subsection titles
- `BodyText` - Paragraph text

### Styling Conventions

- Background: `bg-main-bg` for consistent dark theme
- Responsive padding: `px-6 md:px-12 lg:px-20`
- Consistent gap spacing: `gap-4 md:gap-6 lg:gap-8`
- Use Tailwind utility classes
- Follow responsive breakpoints: `md:`, `lg:`, `xl:`, `2xl:`

## Development Status

- ✅ **Home** - Fully implemented with multiple sections
- ✅ **Join** - Fully implemented with comprehensive team information
- ✅ **Sponsorship** - Fully implemented with sponsor information
- 🚧 **Projects** - Placeholder, minimal content
- 🚧 **Team** - Basic structure, needs member cards
- 🚧 **Advisor** - Basic structure, needs advisor cards
- 🚧 **Alumni** - Basic structure, needs alumni cards

## Related Documentation

- [Components Documentation](../components.md) - Reusable components
- [Typography Documentation](../typography.md) - Typography system
- [Development Documentation](../development.md) - Development setup and guidelines
