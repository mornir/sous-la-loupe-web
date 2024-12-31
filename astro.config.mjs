import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'

import alpinejs from '@astrojs/alpinejs'

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon(), alpinejs({ entrypoint: '/src/alpine' }), sitemap()],
})