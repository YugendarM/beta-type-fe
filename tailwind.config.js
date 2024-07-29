/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        betatypePrimaryBlue: "#009FFD",
        betatypeSecondaryBlue: "#DFF4FF",
        betatypeDarkBlue: "#0A335C",
        betatypePrimaryYellow: "#FFEB99",
        betatypeDarkYellow: "#FFCC00",
        betatypeBgHalfWhite: "#EEF4F6",
        betatypeBgViolet: "#5352C7"
      },
      boxShadow: {
        'button': '0px 3px 0px 0px #FFCC00',
        'button_hover': '0px 6px 0px 0px #FFCC00',
        'buttonBlue': '0px 3px 0px 0px #009FFD',
        'buttonBlue_hover': '0px 6px 0px 0px #009FFD',
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-60%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        rise: {
          '0%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(-100%)', opacity: 0 },
        },
      },
      animation: {
        fall: 'fall 0.2s ease-out forwards',
        rise: 'rise 0.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}