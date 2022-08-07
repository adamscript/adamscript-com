import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Loading } from '../components';
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
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])

  return(
    isLoaded ?
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider> :
    <ThemeProvider theme={theme}>
      <Loading />
    </ThemeProvider> 
  ) 
}

export default MyApp
