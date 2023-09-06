import { createTheme } from "@mui/material/styles";
import font400 from '../src/assets/font/Josefin_Sans/static/JosefinSans-Regular.ttf'



// Create a theme instance.
const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained", isDisabled: true },
          style: { color: "green" },
        },
      ],
      
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          fontSize: "62.5%",
          
        },

        body:{
          backgroundColor:'#fafafa',
        },

        '@font-face ':{
          fontFamily: 'font400',
          fontStyle: 'normal',
          fontDisplay: 'swap',
          fontWeight: 400,
          src: ` url(${font400}) format('woff2')`
        },

          

        },
      },
    },
  
  palette: {
    primary: {
      main: "#3a7bfd",
    },
    secondary: {
      main: "#c058f3",
    },
    success: {
      main: "#57ddff",
    },
    gray: {
      main: "#777a92",
      light: "#E0E0E0",
    },
    dark: {
      main: "#161722",
      inputColor: "#25273c",
    },
  },
  typography: {
    fontFamily: 'font400',
    h1: {
      fontSize: "3.2rem",
      fontWeight: "700",
    },

    h2:{
        fontSize:'2.2rem',
        fontWeight: "600",
    },
    body1: {

      fontSize: "1.8rem",
      fontWeight:'550'
    },
    body2: {
      fontSize: "1.2rem",
      
    },
    subtitle1: {
      fontSize: "16.2px",
      fontWeight: "400",
      color:'#777a92'
    },
  },

  
});

export default theme;
