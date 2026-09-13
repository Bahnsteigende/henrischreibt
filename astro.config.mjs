// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://henrischreibt.de',
  trailingSlash: 'never', // keine / am Ende → /blog/erster-post statt /blog/erster-post/
  output: 'static',       // oder 'server', je nachdem wo du hostest (z. B. Netlify = static)
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
