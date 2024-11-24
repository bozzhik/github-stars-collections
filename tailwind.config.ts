import {Config} from 'tailwindcss'
import {fontFamily} from 'tailwindcss/defaultTheme'

const config: Config = {
  content: ['./src/modules/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Geist', ...fontFamily.sans],
    },
    fontWeight: {
      normal: '400',
      semibold: '600',
    },
    extend: {},
  },
  plugins: [],
}
export default config
