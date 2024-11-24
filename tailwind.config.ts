import {Config} from 'tailwindcss'
import {fontFamily} from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/modules/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Geist', ...fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
    },
    colors: {
      background: '#0A0A0A',
      foreground: '#e6e6e6',
      primary: '#FEE102',
    },
    extend: {
      animation: {
        buttonpulse: 'buttonpulse 2s infinite ease-in-out',
      },
      keyframes: {
        buttonpulse: {
          '0%': {
            'box-shadow': '0 0 0 0 theme("colors.primary")',
            // transform: 'scale(1)',
          },
          '50%': {
            'box-shadow': '0 0 0 7px theme("colors.primary/0")',
            // transform: 'scale(1.05)',
          },
          '100%': {
            'box-shadow': '0 0 0 0 theme("colors.primary/0")',
            // transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
