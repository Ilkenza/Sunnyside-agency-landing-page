/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        Soft_red: 'hsl(7, 99%, 70%)',
        Yellow:  'hsl(51, 100%, 49%)',
        Dark_desaturated_cyan:'hsl(167, 40%, 24%)',
        Dark_blue:'hsl(198, 62%, 26%)',
        Dark_moderate_cyan:'hsl(168, 34%, 41%)',
        Very_dark_desaturated_blue:'hsl(212, 27%, 19%)',
        Very_dark_grayish_blue:'hsl(213, 9%, 39%)',
        Dark_grayish_blue:'hsl(232, 10%, 55%)',
        Grayish_blue:'hsl(210, 4%, 67%)',
        White:'hsl(0, 0%, 100%)',
        footerBg: 'hsl(167, 36%, 64%)'
      },
      fontFamily:{
        Barlow: 'Barlow',
        Fraunces: 'Fraunces'
      },
      backgroundImage:{
        img_header_desktop: "url('/../images/desktop/image-header.jpg')",
        img_header_mobile: "url('/../images/mobile/image-header.jpg')",
        img_cherry_desktop: "url('/../images/desktop/image-graphic-design.jpg')",
        img_cherry_mobile: "url('/../images/mobile/image-graphic-design.jpg')",
        img_orange_desktop: "url('/../images/desktop/image-photography.jpg')",
        img_orange_mobile: "url('/../images/mobile/image-photography.jpg')"
      }
    },
  },
  plugins: [],  
}

