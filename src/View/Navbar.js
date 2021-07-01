import {
  AppBar,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import InfoIcon from "@material-ui/icons/Info";
const useStyles = makeStyles((theme) => ({
  iconButton: {
    position: "relative",
    marginBottom: "2px",
    "&:hover":{
        background: 'none',
        color: theme.palette.secondary.main
    }
  },
  buttonTitle:{
      position: "relative",
      top: "18px",
      right: "30px",
      fontSize: "12px"
  },
  appBar:{
      background: theme.palette.secondary.main
  },
}));

const Navbar = ({executeScroll,midRef}) => {
    const classes = useStyles()
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton
          onClick={()=>executeScroll(midRef)}  
          className={classes.iconButton}
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <InfoIcon />
          <Typography className={classes.buttonTitle}>About</Typography>
        </IconButton>
        <IconButton
          className={classes.iconButton}
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <InfoIcon />
          <Typography className={classes.buttonTitle}>About</Typography>
        </IconButton>
        <Typography variant="h6" noWrap>
          Material-UI
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
