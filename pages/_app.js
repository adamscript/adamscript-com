import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'

const theme = {
  palette: {
    primary: "#EDEDED",
    secondary: "#F0CB84",
    background: "#2C2C2C",
    common: {
      black: "#000000",
      white: "#FFFFFF"
    }
  }
}

function MyApp({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  ) 
}

export default MyApp
