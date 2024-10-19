import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'night': '#2d2d30',
        'light': '#f0d9b5',
        'dark': '#b58863',
      },
    },
  },
  plugins: [],
} satisfies Config

