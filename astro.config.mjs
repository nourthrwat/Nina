// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// SITE and BASE_PATH are set by the GitHub Pages workflow (.github/workflows/deploy.yml).
// Locally they are unset, so the site runs at http://localhost:4321/.
export default defineConfig({
  site: process.env.SITE,
  base: process.env.BASE_PATH || '/',
});
