// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],

  fonts: [
      {
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['sans-serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
      {
          provider: fontProviders.local(),
          name: 'Cooper',
          cssVariable: '--font-cooper',
          fallbacks: ['serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/Cooper-Regular.woff2'],
                      weight: 400,
                      style: 'normal',
                  },
                  {
                      src: ['./src/assets/fonts/Cooper-Medium.woff2'],
                      weight: 500,
                      style: 'normal',
                  },
                  {
                      src: ['./src/assets/fonts/Cooper-SemiBold.woff2'],
                      weight: 600,
                      style: 'normal',
                  },
                  {
                      src: ['./src/assets/fonts/Cooper-Bold.woff2'],
                      weight: 700,
                      style: 'normal',
                  },
                  {
                      src: ['./src/assets/fonts/Cooper-ExtraBold.woff2'],
                      weight: 800,
                      style: 'normal',
                  },
                  {
                      src: ['./src/assets/fonts/Cooper-Black.woff2'],
                      weight: 900,
                      style: 'normal',
                  },
              ],
          },
      },
	],

  vite: {
    plugins: [tailwindcss()],
  },
});