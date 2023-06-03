/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    container:{
      center: true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1140px',
      }
    },
    extend: {
      fontFamily :{
        gemunu:[ 'Gemunu Libre', 'sans-serif'],
        open:['Open Sans', 'sans-serif']
      },
      colors:{
        'blue':'rgb(212, 212, 212)',
        'light-yellow':'rgb(255, 253, 110)',
        'light-red':'rgb(255, 93, 93)'
      }
    },
  },
  plugins: [],
}

