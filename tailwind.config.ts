import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': '#f0d9b5',
        'dark': '#b58863',
      },
    },
  },
  plugins: [],
} satisfies Config

