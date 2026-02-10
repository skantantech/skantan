# Contributing to Skantan Technologies Corporation Website

## Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/skantan.git
   cd skantan
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

## Code Style

### TypeScript
- Use TypeScript for all components
- Define proper types and interfaces
- Avoid `any` type

### React Components
- Use functional components with hooks
- Keep components small and focused
- Use proper prop types

### CSS/Tailwind
- Use Tailwind CSS utility classes
- Follow mobile-first approach
- Maintain consistent spacing

### File Naming
- Components: PascalCase (e.g., `Navigation.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- CSS: kebab-case (e.g., `custom-styles.css`)

## Commit Guidelines

Follow conventional commits:

```
feat: Add new service section
fix: Correct navigation mobile menu
docs: Update README with deployment guide
style: Format code with Prettier
refactor: Simplify testimonial component
```

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Update the CHANGELOG.md
4. Request review from maintainers

## Testing

```bash
# Run linter
npm run lint

# Build to check for errors
npm run build
```

## Questions?

Open an issue or contact the development team.
