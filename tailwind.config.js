/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primaire': 'var(--bg-primaire)',
        'bg-secondaire': 'var(--bg-secondaire)',
        'text-primaire': 'var(--color-primaire)',
        'blanc': 'var(--blanc)',
        'noire': 'var(--noire)',

        'text-secondaire': 'var(--text-secondaire)',
        'p-color': 'var(--p-color',
      },
      fontFamily: {
        font1: ['var(--font1)'],
        font2: ['var(--font2)'],
      },
    },
  },
  plugins: [],
}
