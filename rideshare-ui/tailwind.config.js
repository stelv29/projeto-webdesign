/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#F0509E",
        "blue-dark": "#3535B5",
        "blue-icon": "#534AB7",
        "bg-screen": "#EEF0F8",
        muted: "#9B9BB0",
        "text-main": "#1A1A2E",
      },
      borderRadius: {
        card: "20px",
        btn: "14px",
        tab: "14px",
        photo: "12px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
