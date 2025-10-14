import type { Config } from 'tailwindcss';

const config: Config = {
  // CRITICAL: Ensure this array includes your 'src' folder paths
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#3498db',
        'secondary-dark': '#2c3e50',
        'accent-teal': '#1abc9c',
        'draft-gray': '#bdc3c7',
        'warning-orange': '#f39c12',
        'bg-light': '#f4f7f9',
      },
      spacing: {
        'sidebar-w': '250px',
        'sidebar-w-collapsed': '50px',
        'right-sidebar-w': '300px',
        'right-sidebar-w-collapsed': '50px',
      },
      // You can remove the custom gridTemplateColumns if you use inline styles or standard tailwind classes
    },
  },
  plugins: [],
};

export default config;