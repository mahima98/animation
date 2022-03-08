module.exports = {
  mode: "jit",
  content: ["*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "cupcake",
  },
  darkMode: "class",
};
