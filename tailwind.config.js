/** @type {import('tailwindcss').Config} */
// import { platformSelect } from "nativewind/theme";

module.exports = {
  content: ["./app.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SpaceMono: ["SpaceMono-Regular"],
        // system: platformSelect({
        //   ios: "Georgia",
        //   android: "sans-serif",
        //   default: "ui-sans-serif",
        // }),
      },
    },
  },
  plugins: [],
};
