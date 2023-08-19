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
      },
    },
    colors: {
      primary: "var(--color-navy)",
      lightNavy: "var(--color-light-navy)",
      lightestNavy: "var(--color-lightest-navy)",
      darkNavy: "var(--color-dark-navy)",
      white: "var(--color-white)",
      lightSlate: "var(--color-light-slate)",
      lightestSlate: "var(--color-lightest-slate)",
      slate: "var(--color-slate)",
      darkSlate: "var(--color-dark-slate)",
      green: "var(--color-green)",
      builtedOverlay: "rgba(255, 255, 255, 0.05)",
    },
  },
  plugins: [],
};
