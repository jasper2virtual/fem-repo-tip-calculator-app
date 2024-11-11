/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: [
    './index.html','./dummy.html',
    './src/**/*.vue',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        'space-mono':['Space Mono', 'monospace'],
      },
      screens:{
        mobile:'375px',
        tablet:'768px',
        laptop:'1024px',
        desktop:'1440px',
      },
      colors:{
        app:{
          primary:{
            strongCyan:'hsl(172, 67%, 45%)',
          },
          neutral:{
            veryDarkCyan:'hsl(183, 100%, 15%)',
            darkGrayishCyan:'hsl(186, 14%, 43%)',
            grayishCyan:'hsl(184, 14%, 56%)',
            lightGrayishCyan:'hsl(185, 41%, 84%)',
            veryLightGrayishCyan:'hsl(189, 41%, 97%)',
            white:'hsl(0, 0%, 100%)',
          }
        }
      }
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    prefix: 'daisy-',
    themes: false,
  },
}

