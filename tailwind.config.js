/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        Nunito: ["Nunito Sans", "sans-serif"],
        OpenSans: ["Open Sans", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#7ec8de",
        secondary: "#f7f8fc",
      },
    },
  },
  plugins: [],
};
