import { Box, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import MailIcon from "@material-ui/icons/MailOutline";
import PhoneIcon from "@material-ui/icons/PhoneAndroidOutlined";
import React from "react";
import Contact from "./Contact";
import png from "../images/backgroundAbout.jpg";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "115vh",
    },
    padding: "30px",
    background: `url(${png})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  gridContainer: {
    position: "relative",
    height: "100%",
    padding: "78px",
  },
  paper: {
    height: "80%",
    padding: "14px",
    background: "transparent",
  },
  gridItemPaper: {
    [theme.breakpoints.up("sm")]: {
      position: "relative",
      top: "150px",
      maxHeight: "150px",
    },
  },
  button: {
    textDecoration: "none",
    "&:hover": {
      background: "none",
    },
  },
  links: {
    textDecoration: "none",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
  },
  paperTitle: {
    [theme.breakpoints.up("sm")]: {
      marginBottom: "25px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "10px",
    },
  },
  emailHolder: {
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
      borderBottom: "2px solid black",
    },
    [theme.breakpoints.up("md")]: {
      borderRight: "2px solid black",
    },
    padding: "7px",
  },
  contactContainer: {
    position: "relative",
    top: 0,
    left: "8px",
  },
  paperHolder: {
    height: "60%",
  },
  contactTypography: {
    "&:hover": {
      color: "#2E5090",
    },
  },
  icon: {
    marginRight: "9px",
  },
  marginLink: {
    marginRight: "50px",
  },
}));
const ClientContact = ({ contactRef }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box className={classes.root} ref={contactRef}>
      <Grid container className={classes.gridContainer}>
        <Grid
          item
          container
          xs={12}
          justify="center"
          alignItems="center"
          className={classes.contactContainer}
        >
          <Grid
            item
            xs={12}
            md={6}
            container
            justify="center"
            className={classes.emailHolder}
          >
            <a
              href="mailto:liortigger@gmail.com"
              className={`${classes.links} ${classes.marginLink}`}
            >
              <Typography
                variant="h3"
                align="right"
                color="secondary"
                className={classes.contactTypography}
              >
                liorTigger@gmail.com
              </Typography>
              {matches && (
                <MailIcon
                  fontSize="large"
                  className={classes.icon}
                  color="secondary"
                />
              )}
            </a>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            justify="center"
            className={classes.phoneHolder}
          >
            <a className={classes.links} href="tel:+972546802801">
              <Typography
                variant="h3"
                align="right"
                color="secondary"
                className={classes.contactTypography}
              >
                0546802801
              </Typography>
              {matches && (
                <PhoneIcon
                  fontSize="large"
                  className={classes.icon}
                  color="secondary"
                />
              )}
            </a>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.paperTitle}>
          <Typography color="secondary" align="center" variant="h2">
            אנא השאירו פרטים ואחזור אליכם בהקדם האפשרי
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.paperHolder}>
          <Paper elevation={3} className={classes.paper}>
            <Contact />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ClientContact;
