module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  corePlugins: {
    preflight: false,
  },
  prefix: "tw-",
  important: true,
  theme: {
    extend: {
      screens: {
        docusaurus: "996px",
      },
      boxShadow: {
        highlight: "inset 0 1px 0 0 rgb(255 255 255 / 5%)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
