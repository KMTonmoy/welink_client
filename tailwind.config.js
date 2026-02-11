/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-primary": "#6D28D9",
        "purple-secondary": "#A78BFA",
        "heading-purple": "#6D28D9",
        "paragraph-gray": "#6B7280",
        "text-black": "#000000",
        "background-light": "#F9FAFB",
      },
      backgroundImage: {
        "button-gradient": "linear-gradient(90deg, #6D28D9 0%, #A78BFA 100%)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      spacing: {
        xs: "0.5rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
  },
  plugins: [],
};
