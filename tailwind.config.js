/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist:[
    'betatypeKeyPurple',
        'betatypeKeyGreen',
        'betatypeKeyRed',
        'betatypeKeyBlue',
        'betatypeKeyPurpleShadow',
        'betatypeKeyGreenShadow',
        'betatypeKeyRedShadow',
        'betatypeKeyBlueShadow',
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
        betatypeBgViolet: "#5352C7",
        betatypeKeyPurple: "#C9C8FF",
        betatypeKeyGreen: "#ACF3C7",
        betatypeKeyRed: "#FFBDCA",
        betatypeKeyBlue: "#99E9E5",
        betatypeKeyYellow: "#FFEB99",
        betatypeKeyOrange: "#FFD599",
        betatypeKeyPurpleShadow: "#2C2B6B",
        betatypeKeyGreenShadow: "#17713A",
        betatypeKeyRedShadow: "#821729",
        betatypeKeyBlueShadow: "#00635F",
        betatypeKeyYellowShadow: "#806500",
        betatypeKeyOrangeShadow: "#804A00",
        betatypeScoreCardPink: "#ED81BA",
        betatypeScoreCardOrange: "#FF9E31",

      },
      boxShadow: {
        'button': '0px 3px 0px 0px #FFCC00',
        'button_hover': '0px 6px 0px 0px #FFCC00',
        'buttonBlue': '0px 3px 0px 0px #009FFD',
        'buttonBlue_hover': '0px 6px 0px 0px #009FFD',
        'keyPurple': '0px 3px 0px 0px #2C2B6B',
        'keyGreen': '0px 3px 0px 0px #17713A',
        'keyRed': '0px 3px 0px 0px #821729',
        'keyBlue': '0px 3px 0px 0px #00635F',
        'keyYellow': '0px 3px 0px 0px #806500',
        'keyOrange': '0px 3px 0px 0px #804A00',
        'keyGray': '0px 3px 0px 0px #4B5563',
        'custom': '0px 0px 40px rgba(0, 0, 0, 0.1), 0 0px 40px rgba(0, 0, 0, 0.08)',
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