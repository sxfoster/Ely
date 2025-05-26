# Ely Aesthetics Site

This project is a [Next.js](https://nextjs.org/) application that statically exports a small marketing site for Ely Aesthetics.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x is required)
- npm (comes with Node)

## Installation

1. Clone the repository and change into the project directory:

   ```bash
   git clone <repo-url>
   cd Ely
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

## Development Workflow

During development, run the built‑in dev server. This provides hot reloading and runs the site at `http://localhost:3000` by default.

```bash
npm run dev
```

Edit files under `app/`, `content/`, `styles/` and `public/` and the browser will refresh as you save changes.

## Building for Production

The project uses `output: 'export'` in `next.config.js`. Running the build script compiles the app and writes a fully static site to the `out/` directory:

```bash
npm run build
```

The contents of `out/` can be deployed to any static hosting provider.

## Project Structure

- `app/` – Next.js pages, layout and React components
- `public/` – Client‑side JavaScript (`main.js`) and static assets
- `styles/` – Global CSS
- `old/` – Legacy HTML/CSS/JS kept for reference
- `out/` – Generated static site after running the build

## Continuous Integration

This repository includes a GitHub Actions workflow (`.github/workflows/ci.yml`) that runs on every push and pull request to `main`. It installs dependencies with `npm ci`, builds the project, and uploads the `out/` directory as an artifact. Uncomment the deployment steps in the workflow to publish the site automatically to GitHub Pages or adapt it for another host such as Netlify.

Create a branch protection rule for `main` so that pull requests must pass this workflow before they can be merged.

## Additional Notes

- To start the production server (useful for previewing the build locally), run:

  ```bash
  npm run start
  ```

