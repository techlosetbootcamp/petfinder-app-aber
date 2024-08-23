/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "arial": ['Arial']
      },
      keyframes: {
        "translate": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-250px))" }
        }

      },
      animation: {
        "translate": "translate 10s linear infinite "
      }
    },

    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    colors: {
      "primary": "#6504B5",
      "white": "#fff",
      "black": "#4D4751",
      "blue": "#410078",
      "darkBlue": "#2E0152",
      "red": "#E81C24",
      "purple": "#F4E9FD",
      "gray": {
        100: "#FFFFFFBF",
        200: "#EFEEF1",
        300: "#D2D1D3",
        400: "#5C5560"
      }

      
    }
  },
  plugins: [],
}

