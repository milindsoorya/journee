import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'var(--primary-blue)',
        'secondary-dark': 'var(--secondary-dark)',
        'accent-teal': 'var(--accent-teal)',
        'draft-gray': 'var(--draft-gray)',
        'warning-orange': 'var(--warning-orange)',
        'bg-light': 'var(--bg-light)',
      },
      spacing: {
        'sidebar-w': '250px',
        'sidebar-w-collapsed': '50px',
        'right-sidebar-w': '300px',
        'right-sidebar-w-collapsed': '50px',
      },
    },
  },
  plugins: [],
};

export default config;