import './App.css';
import { useRef} from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Top from './View/Top';
import About from './View/About';
import ClientContact from './View/ClientContact';
import Header from './View/Header';

const scrollToRef = (ref) => window.scrollTo({left:0,top:ref.current.offsetTop, behavior: 'smooth'})   
const useStyles = makeStyles((theme) => ({
  "@global":{
    body:{
      background: theme.palette.background.body,
    }
  },
  App:{
    [theme.breakpoints.down("sm")]:{
      paddingRight: 0,
      paddingLeft: 0,
    }
  },
  h1:{
    display: "none",
  }
}));

function App() {
  const landingRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)
  const executeScroll = (ref) => scrollToRef(ref)
  const classes = useStyles();
  return (
    <>
      <Header executeScroll={executeScroll} aboutRef={aboutRef} contactRef={contactRef} landingRef={landingRef}/>
    <Container className={classes.App}>
      <h1 className={classes.h1}>ליאור טיגר מעצבת פנים</h1>
      <Top landingRef={landingRef}/>
      <About aboutRef={aboutRef}/>
      <ClientContact contactRef={contactRef}/>
    </Container>
    </>
  );
}

export default App;
