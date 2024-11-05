// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         "primary" : ["Josefin Sans", "sans-serif"],
//         "secondary" : ["Playfair", "serif"]
//       },
//       colors: {
//         "pink" : "#D3BAC5",
//         "darkblue" : "#00032A",
//         "gray" : "484c61"
//       }
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
        fontFamily: {
          "primary" : ["Josefin Sans", "sans-serif"],
          "secondary" : ["Playfair", "serif"]
        },
        colors: {
          "pink" : "#D3BAC5",
          "darkblue" : "#00032A",
          "gray" : "484c61"
        }
      },
    },
  plugins: [],
}