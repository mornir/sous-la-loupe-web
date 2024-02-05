import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import vue from '@astrojs/vue'

import alpinejs from '@astrojs/alpinejs'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    vue(),
    alpinejs({ entrypoint: '/src/alpine' }),
  ],
})
