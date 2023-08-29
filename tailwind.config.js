/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "hsl(0, 0%, 98%)",
            foreground: "#11181C",
          },
        },
        dark: {
          colors: {
            background: "hsl(207, 26%, 17%)",
            foreground: "#ECEDEE",
            darkBlue: {
              50: "hsl(209, 23%, 22%)",
              100: "hsl(207, 26%, 17%)",
              200: "hsl(200, 15%, 8%)",
            },
            grey: {
              50: "hsl(0, 0%, 52%)",
              100: "hsl(0, 0%, 98%)",
              200: "hsl(0, 0%, 100%)",
            },
          },
        },
      },
    }),
  ],
};
