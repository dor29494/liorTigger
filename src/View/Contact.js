import React, { useState } from "react";
import { TextField, Button, withStyles, makeStyles, Grid, Snackbar, IconButton} from "@material-ui/core/";
import SendIcon from '@material-ui/icons/Send';
import CloseIcon from '@material-ui/icons/Close';
import { validateEmail, validatePhoneNumber } from "../utils/helpers";
import { Alert } from "@material-ui/lab";
import { defaultClientInfo } from "../utils/constanst";

import emailjs from "emailjs-com";
const useStyles = makeStyles((theme) => ({
  inputGrid:{
      [theme.breakpoints.up("sm")]:{
        marginRight: "5px",
        marginLeft: "5px",
      },
      [theme.breakpoints.down("sm")]:{
        maxHeight: "83px"
      }
  },
  GridWrapper: {
      position: "relative",
      height: "100%",
    
  },
  button:{
    "&:hover":{
      background: theme.palette.primary.main,
    }
  }

}));

export const InputField = withStyles((theme)=>({
  root: {
    direction: "rtl",
    fontFamily: 'Varela Round',
    width: "97%",
    margin:"auto",
      marginBottom: "15px",
    "& .MuiInputBase-input":{
      fontFamily: 'Varela Round',
      textAlign: "end",
    },
    "& label.Mui-focused": {
      color: theme.palette.primary.main,
      fontFamily: 'Varela Round',
    },
    "& label": {
      color: theme.palette.secondary.main,
      fontFamily: 'Varela Round',
      fontWeight: "200",

    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        fontFamily: 'Varela Round',
        borderColor: theme.palette.secondary.main,

      },
      "&.Mui-focused fieldset": {
        fontFamily: 'Varela Round',
        borderColor: theme.palette.secondary.main,

      },
    },
  },
}))(TextField);

const Contact = () => {
  const classes = useStyles();
  const [contactInfo,setContactInfo] = useState(defaultClientInfo)
  const [errors, setErrors] = useState({});
  const [emailAlert,setEmailAlert] = useState({alert: null})
  const handleSubmit = () => {

     const errorsClone = {...errors}
     const {fullName,email,phone} = contactInfo
     if(!validateEmail(email)){
        errorsClone.email = "המייל שהזנת לא תקין"
     }
     if(!(fullName !== null) || fullName?.length < 4 || fullName?.length > 16){
        errorsClone.fullName = "אנא מלאו את שמכם המלא"

     }
     if(!(phone !== null) || !validatePhoneNumber(phone)){
        errorsClone.phone = "מספר הטלפון לא תקין"
     }
     if(errorsClone.email !== null || errorsClone.fullName !== null ||  errorsClone.phone !== null){
        return setErrors(errorsClone);
     }
     else{
      emailjs
      .send(
        "service_efrxhp6",
        "template_u0x3vso",
        contactInfo,
        "user_poE90BX0U9vzD5a73FvXX"
      )
      .then(
        function (response) {
          setEmailAlert({alert: "ההודעה שלך נשלחה בהצלחה, נחזור אליך בקרוב!"})
        },
        function (err) {
          console.error(err);
        }
      );
     }};
    

     const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setEmailAlert((prev) => ({ ...prev, alert: null }))
    };

  const handleChange = (e) => {
    setErrors((prev)=>({...prev,[e.target.name]: null}))
    setContactInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
          <Grid container justify="center" className={classes.GridWrapper}>
            <Grid item xs={12} md={12} className={classes.inputGrid} container>
            {errors?.fullName && (
                <Alert severity="error">{errors.fullName.toString()}</Alert>
              )}
              <InputField
                onChange={handleChange}
                className={classes.input}
                name="fullName"
                label="שם"
                variant="outlined"
                size="medium"
              />
              </Grid>
              <Grid item xs={12} md={12} className={classes.inputGrid} container>
              {errors?.email && (
                <Alert severity="error">{errors.email.toString()}</Alert> 
              )}
              <InputField
                onChange={handleChange}
                className={classes.input}
                name="email"
                label="מייל"
                variant="outlined"
                size="medium"
              />
            </Grid>
            <Grid item xs={12} md={12} className={classes.inputGrid} container>
            {errors?.phone ? (
                <Alert severity="error">{errors.phone.toString()}</Alert>
              ) : <div></div>}
              <InputField
                onChange={handleChange}
                className={classes.input}
                name="phone"
                label="נייד"
                variant="outlined"
                size="medium"
              />
            </Grid>
            <Grid item xs={8}>
                <Button fullWidth 
                variant="contained" 
                color="secondary" 
                className={classes.button}
                endIcon={<SendIcon/>}
                onClick={handleSubmit}>
                    השאר פרטים
                </Button>
            </Grid>
      <Snackbar
        open={!!emailAlert?.alert}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
        onClose={handleClose}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
        message={emailAlert?.alert}
        severity="error"
      />
    </Grid>
    </>
   
  );
};

export default Contact;
