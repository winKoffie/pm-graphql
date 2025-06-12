/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}', // optional if you use /src structure
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      xxl: '1920px', // ✅ Add px
    },
    extend: {
      colors: {
        primary: '#2D2A32',
        accent: '#9B5DE5',
        gold: '#D4AF37',

        // ✅ Support for your custom theme CSS variables
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        geist: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        sora: ['var(--font-sora)', 'sans-serif'],
      },
    },
  },
  plugins: [], // 🚫 No Flowbite here
};
