/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        calibre: ["Calibre", "sans-serif"],
        sfMono: ["SFMono", "sans-serif"],
      },
      boxShadow: {
        header: "0 1px 18px 10px rgba(0, 0, 0, 0.18)",
        button: "4px 4px var(--color-green)",
      },
    },
    colors: {
      primary: "rgb(1,20,36)",
      lightNavy: "rgb(17,34,64)",
      lightestNavy: "rgb(35,53,84)",
      darkNavy: "rgb(2, 12, 27)",
      lightSlate: "rgb(168, 178, 209)",
      lightestSlate: "rgb(204, 214, 246)",
      darkSlate: "rgb(73,86,112)",
      green: "rgb(100,255,218)",
      builtedOverlay: "rgba(255, 255, 255, 0.05)",
      slate: {
        200: "rgb(226, 232, 240)",
        400: "rgb(148, 163, 184)",
        500: "rgb(100, 116, 139)",
        900: "rgb(15, 23, 42)",
      },
      white: "rgb(255, 255, 255)",
    },
  },
  plugins: [],
};
