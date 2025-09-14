/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        adlam: ['ADLaM Display', 'cursive'],
        cascadia: ['Cascadia Code', 'monospace'],
      },
    },
    screens: {
      phone: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [],
}
