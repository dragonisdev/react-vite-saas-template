# Vercel Inspired - Vite React Template

A modern, responsive landing page template based on Vercel, built with React, TypeScript, and Tailwind CSS. This project showcases a beautiful and accessible SaaS landing page with smooth animations and modern design principles.

- Built with React 18 and TypeScript
- Smooth animations using Framer Motion
- Mobile-first approach
- Tailwind CSS for styling
- SEO optimized
- Fast development with Vite

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

## Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Start the development server:
```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser to see the result.

## Build

To create a production build:

```bash
npm run build
# or
yarn build
```

To preview the production build:

```bash
npm run preview
# or
yarn preview
```

## Dependencies

### Production Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| react | ^18.3.1 | React library |
| react-dom | ^18.3.1 | React DOM rendering |
| framer-motion | ^10.16.4 | Animation library |
| lucide-react | ^0.344.0 | Icon library |
| react-intersection-observer | ^9.5.2 | Intersection Observer for React |

### Development Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| @vitejs/plugin-react | ^4.3.1 | Vite plugin for React |
| typescript | ^5.5.3 | TypeScript support |
| tailwindcss | ^3.4.1 | Utility-first CSS framework |
| postcss | ^8.4.35 | CSS transformation tool |
| autoprefixer | ^10.4.18 | PostCSS plugin for vendor prefixes |
| eslint | ^9.9.1 | JavaScript linter |
| vite | ^5.4.2 | Frontend build tool |

## Project Structure

```
deployify/
├── src/
│   ├── components/     # Reusable components
│   ├── sections/       # Page sections
│   ├── App.tsx        # Main App component
│   └── main.tsx       # Entry point
├── public/            # Static assets
├── index.html         # HTML template
└── package.json       # Project dependencies
```

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/) 