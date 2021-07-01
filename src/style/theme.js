import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  "@global":{
    body:{
      background: "#000000"
    }
  },
  direction: 'rtl',
  palette: {
    primary: {
      main: "#4267B2",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      paper: "#ffffff",
      background: "#898F9C",
      body: "#000010",
    },
    paper: {
      main: "#8e8e8e",
    },
  },
  appBackground: {
    default: "#001440",
  },
  typography: {
    h2: {
      fontFamily: 'Varela Round',
      fontSize: "22px",
      marginTop: "3rem"
    },
    h4: {
      fontFamily: 'Varela Round',
      fontSize: "16px",
      color: "white",
    },
    h3: {
      fontFamily: 'Varela Round',
      fontSize: "25px",
    }, 
    body1:{
        fontFamily: 'Raleway',
        fontSize: "24px",
    },
  },
});

export default theme;
