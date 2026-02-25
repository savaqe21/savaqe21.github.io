# 🚀 Personal Portfolio

A high-performance, responsive portfolio built with **Astro**, **Tailwind CSS**, and **Native Browser Animations**. This site features a data-driven architecture where projects, experience, and contact info are managed via JSON.

## 🛠️ Tech Stack

- **Frontend:** [Astro](https://astro.build/) (SSG)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Iconify](https://iconify.design/) via `astro-icon`
- **Deployment:** [GitHub Pages](https://pages.github.com/)
- **Backend (Planned):** [FastAPI](https://fastapi.tiangolo.com/)

## ✨ Features

- **Matrix Rain Hero:** A custom canvas-based background effect.
- **Data-Driven:** All content is separated into `/src/data/*.json` for easy updates.
- **Dynamic Projects:** Auto-sliding image gallery with crossfade transitions.
- **Intersection Observer:** Smooth reveal animations as you scroll.
- **Fully Responsive:** Optimized for mobile, tablet, and desktop.

## 🚀 Getting Started

Follow these instructions to get a local copy up and running.

### Prerequisites

Make sure you have **Node.js** (v18.14.1 or higher) installed on your machine.

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
