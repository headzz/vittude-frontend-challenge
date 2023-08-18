import {} from 'styled-components'
import { theme } from './theme' // Import type from above file

type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {} // extends the global DefaultTheme with our ThemeType.
}
