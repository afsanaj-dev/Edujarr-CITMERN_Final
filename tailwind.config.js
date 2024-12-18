

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

      // screens: {
      //   xs: '480px', // Full width for small screens
      //   // md: '768px', // Custom width for medium screens
      //   // lg: '1024px', // Custom width for large screens
      //   // xl: '1280px', // Custom width for extra-large screens
      // },

    extend: {
      colors: {
        black: '#1B2336',
        green: '#2AAA94',
        ash: '#4A4A4A',
        ash2: '#4F547B',
        headColor: '#323232',
        pColor: '#4E596B',
        courseText : '#324361',
      },
      backgroundImage: {    
        'btn-gradient':'linear-gradient(102deg, #083F9B 0%, #7F56D9 93.39%)',
        // 'banner-gradient': 'linear-gradient(257deg, rgba(4, 1, 108, 0.80) 0.69%, rgba(74, 22, 189, 0.80) 100%)',
        'banner-grad': 'linear-gradient(93deg, #04016C 0%, #4A16BD 100%)',
        'back1': "url('../images/back1.png')",
        'course-grad' :'linear-gradient(180deg, #D9ECFF 0%, rgba(240, 243, 255, 0.00) 127.78%)',
        'learn-grad': 'linear-gradient(72deg, rgba(8, 79, 199, 0.90) 26.49%, rgba(127, 86, 217, 0.90) 85.53%);',
        'review-grad': 'linear-gradient(0deg, #DBEDFF 0%, rgba(219, 237, 255, 0.00) 100%)',
    }
    },
    fontFamily: {
      rowdie: ["Rowdies", "sans-serif"],
      saira: ["Saira", 'sans-serif'],
      inter: ["Inter", 'sans-serif'],
    },
    

  },
  
}