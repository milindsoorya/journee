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
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        warning: 'var(--warning)',
        sidebar: 'var(--sidebar)',
        'sidebar-foreground': 'var(--sidebar-foreground)',
      },
      spacing: {
        'sidebar-w': 'var(--sidebar-w)',
        'sidebar-w-collapsed': 'var(--sidebar-w-collapsed)',
        'right-sidebar-w': 'var(--right-sidebar-w)',
        'right-sidebar-w-collapsed': 'var(--right-sidebar-w-collapsed)',
      },
    },
  },
  plugins: [],
};

export default config;