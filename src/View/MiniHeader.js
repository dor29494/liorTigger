import React from "react";
import { makeStyles,useTheme} from "@material-ui/core/styles";
import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  SwipeableDrawer,
  Divider,
} from "@material-ui/core/";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& .MuiDrawer-paper": {
      background: "blue",
    },
  },
  appBar: {
    background: theme.palette.background.dark,
  },
  drawer: {
    height: "42%",
  },
  menuButton: {
    marginRight: "1px",
  },
  title: {
    flexGrow: 1,
  },
  drawerText: {
    textAlign: "initial",
  },
  listWrapper: {
    height: "100%",
    background: theme.palette.background.paper,
  },
  button: {
    marginRight: "13px",
    fontFamily: "Varela Round",
  },
  listItem:{
    "& .MuiListItemText-primary":{
      fontFamily: "Varela Round",
      fontSize: "16px"

    }

  }
}));

const MiniHeader = ({drawerBoolean,landingRef,toggleDrawer,openDrawer,executeScroll,contactRef,aboutRef}) => {
  const classes = useStyles();
  const theme = useTheme()

  const list = (anchor) => (
    <Box
      className={classes.listWrapper}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer( false)}
    >
    <Box>
    <IconButton onClick={openDrawer}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
    </Box>
    <Divider />
      <List>
            <ListItem button className={classes.listItem} onClick={()=>executeScroll(landingRef)}>
              <ListItemText primary={"ראשי"} className={classes.drawerText} />
            </ListItem>
            <ListItem button className={classes.listItem} onClick={()=>executeScroll(aboutRef)}>
              <ListItemText primary={"אודות"} className={classes.drawerText} />
            </ListItem>
            <ListItem button className={classes.listItem} onClick={()=>executeScroll(contactRef)}>
              <ListItemText primary={"צרו קשר"} className={classes.drawerText} />
            </ListItem>
    
      </List>
    </Box>
  );
  return (
    <div className={classes.root}>
      <SwipeableDrawer
        className={classes.drawer}
        anchor={"left"}
        open={drawerBoolean}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list("left")}
      </SwipeableDrawer>
    </div>
  );
};

export default MiniHeader;
