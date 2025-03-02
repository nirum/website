# Codebase Guide for niru.dev

## Build Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server  
- `npm run export` - Export static files
- `just dev` - Alternative to run dev server
- `just build` - Alternative to run build

## Code Style
- Use 2-space indentation
- Use single quotes for strings
- Use named exports for components (`export default function Component()`)
- Use arrow functions for inner components
- Use TailwindCSS for styling
- Use camelCase for file naming (e.g., `header.js`, `active-link.js`)
- Use ES6 syntax with imports/exports
- Use PropTypes for type checking
- Use standard JS comments (`// comment`)
- Keep components small and focused on a single responsibility
- Follow React hooks best practices
- Maintain consistent JSX formatting with clear component hierarchy