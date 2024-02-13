import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "project-blue-100": "#A5B4FC",
        "project-blue-300": "#818CF8",
        "project-blue-600": "#4F46E5",

        "project-gray-300": "#BBBBBB",
        "project-gray-350": "#A7A6AC",
        "project-gray-500": "#9CA3AF",
        "project-gray-600": "#999595",
        "project-gray-700": "#757171",
        "project-gray-750": "#363638",
        "project-gray-800": "#333334",
        "project-gray-850": "#313137",
        "project-gray-900": "#262627",


        "project-red-500": "#E54646",
      },
      borderColor: {
        "project-blue-100": "#A5B4FC",
        "project-blue-300": "#818CF8",
        "project-blue-600": "#4F46E5",

        "project-gray-100": "#E9E7E7",
        "project-gray-300": "#BBBBBB",
        "project-gray-350": "#A7A6AC",
        "project-gray-500": "#9CA3AF",
        "project-gray-600": "#999595",
        "project-gray-700": "#757171",
        "project-gray-800": "#333334",
        "project-gray-900": "#262627",


        "project-red-500": "#E54646",
      },
      textColor: {
        "project-blue-100": "#A5B4FC",
        "project-blue-300": "#818CF8",
        "project-blue-600": "#4F46E5",

        "project-gray-300": "#BBBBBB",
        "project-gray-350": "#A7A6AC",
        "project-gray-500": "#9CA3AF",
        "project-gray-600": "#999595",
        "project-gray-700": "#757171",
        "project-gray-800": "#333334",
        "project-gray-900": "#262627",


        "project-red-500": "#E54646",
      }
    },
  },
  plugins: [],
};
export default config;