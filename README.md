# Darts Academy Website

A modern, accessible web application for a local darts academy built with Angular 21 and custom CSS design tokens.

## 🎯 Project Overview

This website serves as the online presence for a local darts academy, providing information about coaching services, sessions, and membership. The application follows a mobile-first design approach with progressive enhancement for larger screens.

## 🛠️ Technology Stack

- **Framework**: Angular 21 (Standalone Components)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Custom CSS with Design Tokens (no external CSS framework)
- **Build Tool**: Angular CLI with esbuild
- **Package Manager**: npm

## 🎨 CSS Architecture

This project uses a **custom CSS design token system** instead of Bootstrap, Tailwind, or other frameworks. This decision was made to:

- Maintain full control over the design language
- Ensure consistent accessibility compliance (44×44px touch targets, WCAG AA contrast)
- Keep the bundle size minimal
- Follow the project's mobile-first methodology exactly

### Style Structure

```
src/styles/
├── tokens.css    # CSS custom properties (colours, spacing, typography, breakpoints)
├── base.css      # CSS reset, typography, layout utilities
└── shared.css    # Reusable UI components (buttons, cards, badges, forms)
```

### Design Tokens

All visual properties reference CSS custom properties defined in [`tokens.css`](src/styles/tokens.css:1):

```css
/* Colours */
--colour-primary: #1b5e20;
--colour-secondary: #ffc107;

/* Spacing */
--spacing-sm: 8px;
--spacing-md: 16px;

/* Breakpoints (use in media queries) */
@media (min-width: 600px)  { /* tablet */ }
@media (min-width: 1024px) { /* desktop */ }
```

## 📱 Responsive Design

The application follows a **mobile-first** approach:

- **Base styles**: Optimized for 360px width (mobile baseline)
- **Tablet**: `min-width: 600px`
- **Desktop**: `min-width: 1024px`

### Key Principles

- No fixed pixel widths on containers (use `max-width` with `width: 100%`)
- Touch targets minimum 44×44px
- Fluid typography that scales with viewport

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start the development server
npm start

# Navigate to http://localhost:4200
```

The application will automatically reload when you change any source files.

### Build

```bash
# Build for production
npm run build

# Build artifacts will be stored in dist/darts-academy
```

## 📁 Project Structure

```
darts-academy/
├── src/
│   ├── app/
│   │   ├── app.ts           # Root component
│   │   ├── app.html         # Root template
│   │   ├── app.css          # Root styles (layout only)
│   │   ├── app.config.ts    # Application configuration
│   │   └── app.routes.ts    # Route definitions
│   ├── styles/
│   │   ├── tokens.css       # Design tokens
│   │   ├── base.css         # Base/reset styles
│   │   └── shared.css       # Shared UI components
│   ├── styles.css           # Global styles entry point
│   ├── index.html           # HTML entry point
│   └── main.ts              # Application bootstrap
├── public/
│   └── favicon.ico
├── angular.json             # Angular CLI configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies and scripts
```

## 🧪 Testing

This project uses Jest and Angular Testing Library for unit testing.

```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage
```

### Testing Requirements

Every component must have a test file covering:
- ✅ Renders without error
- ✅ Inputs produce expected output
- ✅ User interactions trigger correct outputs/events
- ✅ Edge cases (empty, null, max values)
- ✅ Business logic branches

## ♿ Accessibility

This application is built to meet **WCAG AA** standards:

- All interactive elements have visible focus states
- Colour contrast ratios meet minimum requirements
- Touch targets are minimum 44×44px
- Semantic HTML structure
- ARIA attributes where necessary
- Passes AXE accessibility checks

## 📝 Coding Standards

### Angular Best Practices

- **Standalone Components**: All components are standalone (Angular 20+ default)
- **Signals**: Use signals for state management (`input()`, `output()`, `computed()`)
- **OnPush**: Default change detection strategy
- **Reactive Forms**: Prefer over template-driven forms
- **Control Flow**: Use `@if`, `@for`, `@switch` instead of `*ngIf`, `*ngFor`

### TypeScript Guidelines

- Strict type checking enabled
- Prefer type inference when obvious
- Avoid `any`; use `unknown` when type uncertain
- Use `inject()` function instead of constructor injection

### CSS Guidelines

- **No component-level CSS for shared UI elements**
- Use design tokens via CSS custom properties
- Mobile-first media queries
- No `ngClass` or `ngStyle` - use native bindings

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server on port 4200 |
| `npm run build` | Build for production |
| `npm test` | Run unit tests |
| `npm run lint` | Run ESLint |

## 📄 License

This project is private and proprietary to Darts Academy.

---

Built with ❤️ for the local darts community
