/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#0b72b5',
        accent: '#D38C56',
        light: '#e6bd9e',
      },
    },
  },
  plugins: [],
}
