module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "body": ["DM Sans", "sans-serif"]
      },
      animation : {
        "wave": "wave 2.5s infinite"
      }
    },
  },
  plugins: [],
}