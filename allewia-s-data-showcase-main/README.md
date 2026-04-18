# Allewia Portfolio

Personal portfolio website for **Allewia Elizabeth Thomas** — a Data Analyst showcasing skills, tools, and experience in data analytics, visualization, and storytelling.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [bun](https://bun.sh/) package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/allewiathomas/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
bun install
```

### Development

```bash
# Start the development server
npm run dev
# or
bun dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
# or
bun run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| [React 18](https://react.dev/) | UI framework |
| [TypeScript](https://www.typescriptlang.org/) | Type safety |
| [Vite 5](https://vitejs.dev/) | Build tool & dev server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com/) | Accessible component library |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [Lucide React](https://lucide.dev/) | Icon library |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [React Query](https://tanstack.com/query) | Data fetching & caching |

---

## 📁 Project Structure

```
├── public/
│   ├── favicon.png              # Site favicon
│   ├── resume/                  # Downloadable resume PDF
│   └── robots.txt
├── src/
│   ├── assets/                  # Images & static assets
│   ├── components/
│   │   ├── ui/                  # shadcn/ui base components
│   │   ├── Navbar.tsx           # Navigation bar with theme toggle
│   │   ├── HeroSection.tsx      # Dashboard-style hero
│   │   ├── AboutSection.tsx     # Infographic about section
│   │   ├── SkillsSection.tsx    # Flow blocks skill cards
│   │   ├── ToolsSection.tsx     # Orbital tools layout
│   │   ├── ContactSection.tsx   # Contact form (mailto)
│   │   ├── Footer.tsx           # Footer with social links
│   │   └── SocialLinks.tsx      # Social media icon links
│   ├── hooks/                   # Custom React hooks
│   ├── lib/                     # Utility functions
│   ├── pages/                   # Route pages
│   ├── index.css                # Global styles & CSS variables
│   └── main.tsx                 # App entry point
├── index.html                   # HTML template
├── tailwind.config.ts           # Tailwind configuration
├── vite.config.ts               # Vite configuration
└── tsconfig.json                # TypeScript configuration
```

---

## 📝 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests with Vitest |

---

## 🎨 Features

- **Dark / Light Theme** — Toggle between themes via the navbar
- **Dashboard Hero** — Animated metric cards with data analyst branding
- **Infographic About** — Visual blocks for strengths, mindset, and abilities
- **Flow Block Skills** — Animated mini-charts for each skill category
- **Orbital Tools** — Revolving tool icons in a modern orbit layout
- **Contact Form** — Opens email client via `mailto:` with pre-filled data
- **Resume Download** — One-click PDF download from the hero section
- **Fully Responsive** — Optimized for desktop, tablet, and mobile

---

## 📄 Updating the Resume

Replace the file at `public/resume/ALLEWIA_ELIZABETH_THOMAS_RESUME.pdf` with your updated resume. Keep the same filename or update the reference in `src/components/HeroSection.tsx`.

---

## 📬 Contact

- **Email:** allewiathomas1420@gmail.com
- **LinkedIn:** [linkedin.com/in/allewia-thomas](https://www.linkedin.com/in/allewia-thomas)
- **GitHub:** [github.com/allewiathomas](https://github.com/allewiathomas)

---

## 📜 License

This project is for personal portfolio use. All rights reserved © Allewia Elizabeth Thomas.
