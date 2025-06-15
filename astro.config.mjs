// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  trailingSlash: 'never', // keine / am Ende → /blog/erster-post statt /blog/erster-post/
  output: 'static',       // oder 'server', je nachdem wo du hostest (z. B. Netlify = static)
  vite: {
    plugins: [tailwindcss()]
  }
});