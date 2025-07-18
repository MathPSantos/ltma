# LTMA Web

A React-based web application built with modern technologies and best practices.

## 🛠️ Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **React Router DOM** - Client-side routing
- **TanStack Query** - Data fetching and caching
- **Radix UI** - Accessible UI components
- **Lucide React** - Icon library
- **Biome** - Code formatting and linting

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── lib/           # Utility functions and configurations
├── app.tsx        # Main app component with routing
└── main.tsx       # Application entry point
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## 🔧 Development

- **Development server**: `http://localhost:5173`
- **Code formatting**: Uses Biome with Ultracite configuration
- **Path aliases**: `@/` points to `src/` directory
- **Type checking**: Strict TypeScript configuration enabled

## 📝 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build 