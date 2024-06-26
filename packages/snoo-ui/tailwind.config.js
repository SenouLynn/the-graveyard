/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.stories.tsx",
  ],
  theme: {
    extend: {
      colors: {
        "black-russian": {
          50: "#eeeeff",
          100: "#e0e1ff",
          200: "#c7c7fe",
          300: "#aaa6fb",
          400: "#8f82f7",
          500: "#7e64f0",
          600: "#7047e4",
          700: "#6239c9",
          800: "#4f31a2",
          900: "#432f80",
          950: "#160f29",
        },
        atoll: {
          50: "#effcfc",
          100: "#d8f5f4",
          200: "#b5ecec",
          300: "#82ddde",
          400: "#47c5c9",
          500: "#2ca8ae",
          600: "#278993",
          700: "#246a73",
          800: "#265b64",
          900: "#244d55",
          950: "#133239",
        },
        lochinvar: {
          50: "#f3faf8",
          100: "#d6f1ed",
          200: "#ade2db",
          300: "#7dcbc4",
          400: "#52afaa",
          500: "#368f8b",
          600: "#2b7675",
          700: "#265f5f",
          800: "#224d4d",
          900: "#204141",
          950: "#0d2526",
        },
        givry: {
          50: "#fcf8f0",
          100: "#f9eedb",
          200: "#f3dfc1",
          300: "#e8c089",
          400: "#de9e59",
          500: "#d68339",
          600: "#c86d2e",
          700: "#a65528",
          800: "#854427",
          900: "#6c3a22",
          950: "#3a1c10",
        },
        cashmere: {
          50: "#faf5f2",
          100: "#f3e9e1",
          200: "#e7d1c1",
          300: "#ddbea8",
          400: "#c78f70",
          500: "#bb7454",
          600: "#ad6149",
          700: "#904e3e",
          800: "#754137",
          900: "#5f362f",
          950: "#331a17",
        },
      },
    },
  },
  safelist: [],
  plugins: [],
};
