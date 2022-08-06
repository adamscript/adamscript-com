import { ThemeProvider } from 'styled-components'
import '../styles/globals.css'

const theme = {
  palette: {
    primary: "#EDEDED",
    secondary: "#F0CB84",
    background: "#2C2C2C",
    common: {
      black: "#000000",
      grey: "#757575",
      white: "#FFFFFF"
    },
    hover: {
      secondary: "rgba(211, 170, 95, 1)",
      background: "rgba(240, 203, 132, 0.1)"
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
