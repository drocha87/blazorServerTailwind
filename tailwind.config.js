module.exports = {
  content: ["**/*.razor", "**/*.cshtml", "**/*.html"],
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  purge: ["**/*.{razor,cshtml,html}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
