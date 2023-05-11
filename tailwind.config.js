module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM Sans", "sans-serif"],
        emphasis: ["Caveat", "sans-serif"],
      },
      colors: {
        black: "#252423",
        "black-dark": "#181817",
        gray: "#b7b5b3",
        red: "#f64e4d",
        white: "#f6f4f2",
      },
      animation: {
        wave: "wave 2.5s infinite",
      },
    },
  },
  plugins: [],
};
