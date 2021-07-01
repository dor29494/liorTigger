import { AppBar, Toolbar, Button, Tab, Tabs,IconButton,Box,  useMediaQuery} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import logo from "../images/blackLogo.png";
import logoSq from "../images/blackLogo.png";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import InstagramIcon from '@material-ui/icons/Instagram';
import MenuIcon from "@material-ui/icons/Menu";
import MiniHeader from "./MiniHeader";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: theme.palette.secondary.main,
  },
  appBarTabs: {
    color: "white",
   "&.MuiTab-root":{
     opacity: 1
   },
    "& .MuiTab-wrapper": {
       fontFamily: "Varela Round", 
       opacity: 1,
       "&:hover":{
        color: "#4c68d7",
        fontSize: "16px"
      },
      },
  },
  appBarTitle: {
    position: "relative",
    top: 0,
    right: "36px",
    "& .MuiTab-wrapper":{
     textTransform: "uppercase",
    fontSize: "24px", 
    fontFamily: "Poiret One",
   
   },
 
    "&.MuiTab-root":{
      opacity: 1,
      background: `url(${logoSq})`,
      backgroundPosition: 'center', 
      backgroundSize: 'contain', 
      backgroundRepeat: 'no-repeat',
  

    },
  },

  tabsContainer: {
    flexGrow: 1,
    "& .MuiTabs-flexContainer": {
      position: "relative",
      minHeight: "100%",
    },
  },
  BoxRoot: {
    display: "flex",
    flexDirection: "row",
    "& .MuiBox-root": {
      background: "green",
      display: "flex",
    },
  },
  button: {
    fontSize: "12px",
    fontFamily: "Varela Round",
    "&:hover":{
      fontSize: "16px",
      color: "#4c68d7"
    }
  },
  logo:{
    background: `url(${logo})`,
    color: "white",
    backgroundPosition: 'center', 
    backgroundSize: 'contain', 
    backgroundRepeat: 'no-repeat',
    height: "80%",
    width: "60%",
  },
  icon:{
    color: "white",
    "&:hover":{
      color: "#4c68d7"
    }
  },
  leftSideBox:{
    display: "flex",
  },
  menuIcon:{
    "&:hover":{
      color: "#4c68d7"
    }
  },

}));

const Header = ({executeScroll,aboutRef,contactRef,landingRef}) => {
  const classes = useStyles();
  const [drawerBoolean, setDrawerBoolean] = useState(false);
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'));


  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
    setDrawerBoolean(open);
  };
  const openDrawer = () => {
    setDrawerBoolean(!drawerBoolean)};

  return (
    <>
      <AppBar className={classes.appBar} position="sticky">
        <Toolbar>
          {!matches &&
          <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={openDrawer}
        >
          <MenuIcon className={classes.menuIcon}/>
        </IconButton>
          }
          <Tabs className={classes.tabsContainer} value={0}>
            {matches &&
             <Tab className={classes.appBarTitle} 
             />
            }
              {matches &&
                <Tab className={classes.appBarTabs} onClick={()=>executeScroll(aboutRef)} label="אודות" />
               }
          </Tabs>
          <Box className={classes.leftSideBox}>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/liortigger/">
          <IconButton>
            <InstagramIcon className={classes.icon}/>
          </IconButton>
          </a>
          <a target="_blank" rel="noreferrer" href="http://api.whatsapp.com/send?phone=+972546802801">
          <IconButton>
            <WhatsAppIcon className={classes.icon}/>
          </IconButton>
          </a>
            <Button onClick={()=>executeScroll(contactRef)} color="inherit" className={classes.button}>
              צור קשר
            </Button>
          </Box>
          
        </Toolbar>
      </AppBar>
      <MiniHeader openDrawer={openDrawer} toggleDrawer={toggleDrawer}
       setDrawerBoolean={setDrawerBoolean} drawerBoolean={drawerBoolean} 
       executeScroll={executeScroll} contactRef={contactRef} aboutRef={aboutRef} landingRef={landingRef}/>
    </>
  );
};

export default Header;
