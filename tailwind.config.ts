import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        themes: ["light", "forest", "cupcake"],
        // renoday: {
        //   "primary": "#0055ff",
        //   "secondary": "#007782",
        //   "accent": "#fdba74",
        //   "neutral": "#030504",
        //   "base-100": "#a0a5a4",
        //   "info": "#00edff",
        //   "success": "#00c85c",
        //   "warning": "#d2a600",
        //   "error": "#ff779a",
        // },
      },
    ],
    darkMode: ['class', '[data-theme="forest"]']
  },
  theme: {
    extend: {
      fontFamily: {
        'Rserif': ['Neuton', 'serif'],
        'Rsans': ['Raleway', 'sans'],
      }
    },
  },
  plugins: [require('daisyui'),],
};
export default config;
