import { Box, Grid, makeStyles} from '@material-ui/core'
import React from 'react'
import Image1 from "../images/cover1.jpg"
import logo from "../images/logo1.png"
const useStyles = makeStyles((theme)=>({
    container: {
        height: "100vh",
        background: `url(${Image1})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        marginBottom: "15px"
    },
    GridContainer:{
        height: "100%",
        position: "relative",
    },
    paper:{
        padding: "10px",
        width: "80%",
        margin: "auto",
        position: "relative",
        bottom: "-44px",
    },
    imageWrapper:{
        background: `url(${logo})`,
        backgroundPosition: 'center', 
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        height: "70%",
        width: "50%",
    },
    gridImageWrapper:{
        height: "100%",
    },

}))
const Top = ({landingRef}) => {
    const classes = useStyles()
    return (
        <Box className={classes.container} ref={landingRef}>
            <Grid container justify="center" alignItems="center" className={classes.GridContainer}>
                <Grid item xs={12} className={classes.gridImageWrapper} container justify="flex-end">
                    <Box className={classes.imageWrapper}>
                    </Box>
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default Top
