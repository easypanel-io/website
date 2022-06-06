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
    },
  },
  plugins: [],
};
