import React, {useEffect} from 'react';
import '../styles/start.css';
import maquette_batman from '../assets/maquette_batman.jpg';
import maquette_black_panther from '../assets/maquette_black_panther.jpg';
import maquette_superman from '../assets/maquette_superman.jpg';
import maquette_portfolio_v1 from '../assets/maquette_portfolio_v1.jpg';
import batman_page from '../pages/Batman';

function Start() {

  useEffect(() => {
    const fadeIn = (element) =>{
      let opacity = 0;
      const interval = 20;
      const targetOpacity = 1;

      const fadeEffect = setInterval(() => {
        if(opacity < targetOpacity) {
          opacity += 0.005;
          element.style.opacity = opacity;
        }
        else{
          clearInterval(fadeEffect);
        }
      },interval);
    };

    const moveFromLeft = (element) => {
      let position = -100;
      const targetPosition = 0;

      const interval = 20;
      const step = 2;

      element.style.position = 'relative';

      const moveEffect = setInterval(() => {
        if (position < targetPosition) {
          position += step;
          element.style.left = position + '%';
        }
        else {
          clearInterval(moveEffect);
        }
      }, interval);
    };

    const startElement = document.getElementById('texte_start');
    fadeIn(startElement);

    const worksElement = document.getElementById('texte_works');
    moveFromLeft(worksElement);
  }, []);


  return (
    <>
    
      <div className='start' id="start">
        <div id='texte_start'className='mx-auto col-sm-7 col-md-7 col-9'>
          <span>Welcome!</span><br/>
          <span>I am </span><span className='name'>RAMANDIMBY Ny Aina Carine</span><br/>
          <span>I </span><span className='task'><strong>desing </strong>and<strong> develop </strong></span><span className='work'>websites</span><br/>
          <span>I also do </span><span className='work'>video editing</span>
        </div>
      </div>

      <div className='works col-sm-10 col-md-10 col-9' id='works'>
        <span className='title'>WORKS</span>

        <div  id='texte_works' className='mx-auto col-sm-11 col-md-11 col-9'>
          <div className='row align-self-top w-100 pt-2 mt-2 mb-2 projects-row'>
            <div className='mx-auto d-flex offseted justify-content-center workboxcol pt-0 col-sm-10 col-md-5'>
              <a href='./batman.html'>
                 <img className='maquette' src={maquette_batman} alt='maquette_batman'></img>
              </a>
            </div>
            <div className='mx-auto pt-0 offseted col-sm-11 col-md-5'>
              <span className='maquette_title'>Batman</span><br/>
              <span className='maquette_description'>Designed a website for a formation project. <br/> Used Figma, HTML5, CSS3 and Javascript.</span>
            </div>
          </div>

          <div className='row align-self-top w-100 pt-2 mt-2 mb-2 projects-row'>
            <div className='mx-auto d-flex offseted justify-content-center workboxcol pt-0 col-sm-10 col-md-5'>
            <img className='maquette' src={maquette_black_panther} alt='maquette_black_panther'></img>
            </div>
            <div className='mx-auto pt-0 offseted col-sm-11 col-md-5'>
              <span className='maquette_title'>Black Panther</span><br/>
              <span className='maquette_description'>Designed a website for a formation project. <br/> Used Figma, HTML5, CSS3 and Javascript.</span>
            </div>
          </div>

          <div className='row align-self-top w-100 pt-2 mt-2 mb-2 projects-row'>
            <div className='mx-auto d-flex offseted justify-content-center workboxcol pt-0 col-sm-10 col-md-5'>
             <img className='maquette' src={maquette_superman} alt='maquette_superman'></img>
            </div>
            <div className='mx-auto pt-0 offseted col-sm-11 col-md-5'>
              <span className='maquette_title'>Superman</span><br/>
              <span className='maquette_description'>Designed a website for a formation project. <br/> Used Figma, React JS, Bootstrap and Firebase.</span>
            </div>
          </div>

          <div className='row align-self-top w-100 pt-2 mt-2 mb-2 projects-row'>
            <div className='mx-auto d-flex offseted justify-content-center workboxcol pt-0 col-sm-10 col-md-5'>
             <img className='maquette' src={maquette_portfolio_v1} alt='maquette_protfolio_v1'></img>
            </div>
            <div className='mx-auto pt-0 offseted col-sm-11 col-md-5'>
              <span className='maquette_title'>Portfolio v1</span><br/>
              <span className='maquette_description'>Designed a website for a formation project. <br/> Used Figma, React JS, Bootstrap and Firebase.</span>
            </div>
          </div>
          
        </div>
      </div> 
       
    </>
  )
}

export default Start
