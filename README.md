# 🚀 DevPortfolio: Data-Driven Astro SSG
Live Demo: my-portfolio-astro.netlify.app

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build/)

A high-performance, responsive portfolio built with **Astro**, **Tailwind CSS**, and **Native Browser Animations**. Designed to be 100% data-driven and easily forkable.

## 🌟 Highlights
- **Zero-JS by Default:** Leveraging Astro's islands architecture.
- **JSON-First:** Update your information in `src/data/` without touching any code.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop.
- **Performance:** Optimized for perfect Lighthouse scores.

## 🛠️ Tech Stack
- **Frontend:** [Astro](https://astro.build/) (Static Site Generation)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Iconify](https://iconify.design/) via `astro-icon`
- **Deployment:** [GitHub Pages](https://pages.github.com/)
- **Backend:** [FastAPI](https://fastapi.tiangolo.com/) (Not included, works without backend)

## 🛠️ How to Customize
To make this portfolio yours, simply edit the JSON files in `src/data/`.
```
Directory Structure
├── public/              # Static assets (placeholder.jpg, favicon)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── data/            # JSON files for project data
│   ├── layouts/         # Layout templates with Meta tags
│   ├── pages/           # Site routes (index.astro)
│   └── styles/          # global css styles
├── astro.config.mjs     # Astro configuration
└── tsconfig.json        # Typescript configuration
```

## 🚀 Getting Started
Follow these instructions to get a local copy up and running.

### Prerequisites
Make sure you have **Node.js** (v18.20.8 or higher) installed on your machine.

### Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/nbakh16/my-portfolio
2. **Navigate to the project folder:**
   ```bash
   cd my-portfolio

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

Tailwind CSS: `npx astro add tailwind`

Inter font: `npm install @fontsource-variable/inter` 

Host Grotesk font: `npm install @fontsource-variable/host-grotesk`

Astro-icon: `npx astro add astro-icon`

Material Desing Icons: `npm install @iconify-json/mdi`

https://docs.astro.build/en/guides/styling/#add-tailwind-4

https://www.astroicon.dev

https://icon-sets.iconify.design/mdi/?category=Material


## 📝 License
[MIT License](LICENSE)
