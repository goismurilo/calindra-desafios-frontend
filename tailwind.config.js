module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#f2f2f2",
        "primary-background": "#E9E9E9",
        "secondary-background": "#506FA9",
        "primary-text": "#846219",
        "secondary-text": "#716565",
        "primary-icon": "#E2E0B8",
      },
      fontFamily: {
        sans: ["Roboto Condensed", "Inter var", "sans-serif"],
      }
    },
  },
  plugins: [],
}
