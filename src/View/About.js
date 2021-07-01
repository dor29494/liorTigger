import { Box, Typography } from "@material-ui/core";
import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import png from "../images/about2.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginBottom: "15px",
  },
  gridContainer:{
    height: "100%",
    background: `url(${png})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    padding: "20px"
  },
  paper: {
      padding: "10px",
  },
}));
const About = ({ aboutRef }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} ref={aboutRef}>
      <Grid container className={classes.gridContainer} >
        <Grid item xs={12}>
          <Typography variant="h4" align="center" color="secondary">
          אני מעצבת בשכבות...
          </Typography>
          <br/>
        </Grid>
        <Grid item xs={12} className={classes.gridItemPaper}>
          <Typography variant="h4" align="center" color="secondary">
          שכבות של:
          <br/>
<br/>
מחשבות
<br/>
רעיונות
<br/>
תוכניות
<br/>
פרטים
<br/>
מקוריות
<br/>
רעננות 
<br/>
אהבה
<br/>
בטון
<br/>
ברזל
<br/>
טקסטיל
<br/>
ריהוט
<br/>
צמחיה
</Typography>
        </Grid>
     
        <Grid item xs={12}>
        <Typography variant="h4" align="center" color="secondary">
        <br/>
        מאמינה בתכנון חכם ומקורי, ממקסמת חללים ומגשימה חלומות.
        
        </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h4" align="center" color="secondary">
            <br/>
לחיי הבית שלכם,
<br/>
ליאור טיגר
            </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
