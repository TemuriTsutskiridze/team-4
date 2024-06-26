export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1440px",
    },
  },
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#AD1FEA",
          100: "#c75af6",
        },
        blue: {
          200: "#4661e6",
          100: "#373f68",
          50: "#3a4374",
          10: "#647196",
        },
        white: {
          100: "#ffffff",
          50: "#f2f4ff",
          10: "#f7f8fd",
        },
        tomato: {
          50: "#f49f85",
        },
        skyBlue: {
          50: "#62bcfa",
          100: "#cfd7ff",
        },
      },
    },
  },
  plugins: [],
};
