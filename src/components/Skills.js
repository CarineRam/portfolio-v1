import React from 'react';
import '../styles/skills.css';
import html from '../assets/html.png';
import css from '../assets/css.png';
import reactjs from '../assets/reactjs.png';
import bootstrap from '../assets/bootstrap.png';
import firebase from '../assets/firebase.png';
import microsoft_office from '../assets/microsoft_office.png';
import premiere_pro from '../assets/premiere_pro.png';
import wordpress from '../assets/wordpress.png';
import javascript from '../assets/javascript.png';

function Skills() {
  return (
    <>
      <div id="skills" className='skills'>
      <span className='title1'>SKILLS</span>
        <div className='skills_row row align-self-top w-100 pt-3 mt-3 mb-3 projects-row'>
          <div className='mx-auto justify-content-center d-flex col-sm-4 col-md-4 col-4'>
            <a href="https://developer.mozilla.org/fr/docs/Web/HTML" >
              <img className='skills_image' src={html} alt="html" ></img>
            </a>
          </div>

          <div className='mx-auto justify-content-center d-flex col-sm-4 col-md-4 col-4'>
            <a href="https://developer.mozilla.org/fr/docs/Web/CSS" >
              <img className='skills_image' src={css} alt="css"></img>
            </a>
          </div>

          <div className='mx-auto justify-content-center d-flex col-sm-4 col-md-4 col-4'>
            <a href="https://developer.mozilla.org/fr/docs/Web/Javascript" >
              <img className='skills_image' src={javascript} alt="javascript"></img>
            </a>
          </div>
        </div>

        <div className='skills_row row align-self-top w-100 pt-3 mt-3 mb-3 projects-row'>
          <div className='mx-auto justify-content-center d-flex col-sm-4 col-md-4 col-4'>
            <a href="https://fr.react.dev/" >
              <img className='skills_image' src={reactjs} alt="react js" ></img>
            </a>
          </div>

          <div className='mx-auto justify-content-center d-flex col-sm-4 col-md-4 col-4'>
            <a href="https://getbootstrap.com/" >
              <img className='skills_image' src={bootstrap} alt="bootstrap"></img>
            </a>
          </div>

          <div className='mx-auto justify-content-center d-flex col-sm-4 col-md-4 col-4'>
            <a href="https://firebase.google.com/" >
              <img className='skills_image' src={firebase} alt="firebase"></img>
            </a> 
          </div>
        </div>

        <div className='skills_row row align-self-top w-100 pt-3 mt-3 mb-3 projects-row'>
          <div className='mx-auto justify-content-center d-flex col-sm-4 col-md-4 col-4'>
            <a href="https://www.adobe.com/fr/products/premiere.html" >
              <img className='skills_image' src={premiere_pro} alt="premiere pro" ></img>
            </a>
          </div>

          <div className='mx-auto justify-content-center d-flex col-sm-4 col-md-4 col-4'>
            <a href="https://www.microsoft.com/fr-fr/microsoft-365/microsoft-office" >
              <img className='skills_image' src={microsoft_office} alt="microsoft_office"></img>
            </a>
          </div>

          <div className='mx-auto justify-content-center d-flex col-sm-4 col-md-4 col-4'>
            <a href="https://wordpress.com/" >
              <img className='skills_image' src={wordpress} alt="wordpress"></img>
            </a>
          </div>
        </div>

      </div>

    </>
  )
}

export default Skills