/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 0 10px rgba(0, 0, 0, 0.05)',
      },
      gridTemplateColumns: {
        'custom': 'repeat(2, 1fr)',
      },
    },
  },
  plugins: [],
};
