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
    extend: {},
  },
  plugins: [],
}
export default config
