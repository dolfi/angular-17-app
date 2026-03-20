# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run start      # Start dev server at http://localhost:4200/
npm run build      # Build for production (output in dist/)
npm run watch      # Build in watch mode for development
npm test           # Run unit tests via Karma
ng test            # Run tests (alternative)
```

## Architecture

- **Angular 17** application using standalone components (no NgModules)
- **Build system**: `@angular-devkit/build-angular:application` (new application builder)
- **Routing**: Configured via `app.routes.ts` with `provideRouter`
- **Styling**: Global styles in `src/styles.css`, component styles co-located with `.component.ts` files

### Key Files
- `src/main.ts` - Application entry point
- `src/app/app.config.ts` - Application configuration with providers
- `src/app/app.component.ts` - Root component
- `src/app/app.routes.ts` - Route definitions

### Component Structure
Components use standalone API with `imports` array for dependencies:
- `UserComponent` - User management, imports `GamesComponent`
- `GamesComponent` - Displays game list with `@for` control flow syntax

### Patterns
- Angular 17 control flow: `@for`, `@if`, `@switch` (not `*ngFor`)
- Signal-based reactivity available
- `@Input()` / `@Output()` for component communication
