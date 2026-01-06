module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        status: {
          untouched: '#8B0000',
          progress: '#FFD93D',
          resolved: '#6BCB77',
        }
      }
    },
  },
  plugins: [],
};
