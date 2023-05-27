/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        secondary: "#047857",
        deep: "#803900",
        orange: "#F6882F",
        grey: "#636973",
      },
      fontWeight: {
        "bold-500": 500,
        "bold-600": 600,
        "bold-700": 700,
        "bold-800": 800,
        // 'my-custom-weight': 600,
      },
    },
  },
  plugins: [],
};
