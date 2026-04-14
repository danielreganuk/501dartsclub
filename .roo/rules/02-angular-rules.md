# Roocode Rules — Angular Project

## Architecture Rules

### Business Logic

- **Components own business logic.** Services handle data fetching, state, and shared logic. Components wire the two together and make decisions.
- **Front ends (pages/routes/shells) do not contain business logic.** They compose components and pass data down. No conditionals, transformations, or calculations at the page level.

### Component Design

- Every component must be **self-contained** — inputs, outputs, and internal logic only.
- Use `OnPush` change detection unless there is a specific reason not to.
- Keep templates lean. If a template expression needs more than a ternary, move it to the component class.

---

## Styles

- **No component-level CSS for shared UI elements.** Buttons, badges, tags, cards, form inputs, and any other repeating element must use **shared global styles or a design token system** (CSS custom properties).
- Do not override shared styles from within a component's scoped stylesheet. If a variant is needed, add it to the shared stylesheet as a modifier class.
- One source of truth per visual pattern. If you find yourself writing the same CSS in two places, extract it.

### Design Tokens

Define all colours, spacing, typography, and breakpoints as CSS custom properties in a single `tokens.css` (or equivalent SCSS partial):

```css
:root {
  --colour-primary: #1a73e8;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --radius-base: 4px;
  --font-size-base: 16px;
}
```

---

## Mobile First

- Write all base styles for mobile viewport. Use `min-width` media queries to scale up.
- Default breakpoints (adjust to project needs):

```css
/* base = mobile */
@media (min-width: 600px)  { /* tablet  */ }
@media (min-width: 1024px) { /* desktop */ }
```

- No fixed pixel widths on containers. Use `max-width` with `width: 100%`.
- Touch targets must be at least 44×44px.
- Test layouts at 360px width as the baseline.

---

## Testing

Every component **must have a test file**. No exceptions.

### Minimum coverage per component

| Scenario | Required |
|---|---|
| Renders without error | ✅ |
| Inputs produce expected output | ✅ |
| User interactions trigger correct outputs/events | ✅ |
| Edge cases (empty, null, max values) | ✅ |
| Any business logic branches | ✅ |

### Tooling

- Use **Jest** (preferred) or Karma/Jasmine if the project is already configured for it.
- Use **Angular Testing Library** (`@testing-library/angular`) for DOM interaction tests.
- Mock all HTTP calls — no real network requests in unit tests.
- Keep tests co-located: `my-component.component.spec.ts` alongside the component.
