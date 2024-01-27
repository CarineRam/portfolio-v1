import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Start from './Start';
import Skills from './Skills';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
import Batman from '../pages/Batman';


function App() {
  return (
    <>
      
          <NavBar/>
          <Start/>
          <Skills/>
          <About/>
          <Contact/>
          <Batman/>
      
    </>
  );
}

export default App;
