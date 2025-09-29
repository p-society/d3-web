/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        adlam: ['ADLaM Display', 'cursive'],
        cascadia: ['Cascadia Code', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
        aclinica: ['Aclonica', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
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
