/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors:{
        'Soft-Blue': 'hsl(231, 69%, 60%)',
        'Soft-Red': 'hsl(0, 94%, 66%)',
        'Grayish-Blue': 'hsl(229, 8%, 60%)',
        'Nav-blue': 'hsla(229, 31%, 21%,0.97)',
        'Very-Dark-Blue': 'hsl(229, 31%, 21%)'
      } 
    },
    fontFamily:{
      'rubik-regular':['rubik-regular','sans-serif'],
      'rubik-bold':['rubik-bold','sans-serif']
    }
  },
  plugins: [],
}

