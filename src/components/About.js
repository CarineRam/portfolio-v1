import React from 'react';
import '../styles/about.css';

function About() {
  return (
    <>
    <div className='about col-sm-10 col-md-10 col-9' id='about'>
      <span className='title'>ABOUT</span>
      <div className='frame'>
        <span className='about_title'>Informations</span><br/>
        <span className='informations_title'>Name</span><span className='informations_comparaison'> = </span><span>RAMANDIMBY Ny Aina Carine</span><br/>
        <span className='informations_title'>Day of birth</span><span className='informations_comparaison'> = </span><span>22 / 09 / 98</span><br/>
        <span className='informations_title'>Email</span><span className='informations_comparaison'> = </span><span>carineramandimby@gmail.com</span><br/>
      </div>

      <div className='frame'>
        <span className='about_title'>Educations</span><br/>
        <span className='informations_title'>2023</span><span className='informations_comparaison'> : </span><span>Sayna Academy - Front-End formation</span><br/>
        <span className='informations_title'>2023</span><span className='informations_comparaison'> : </span><span>CNAM - Licence's degree - Information System</span><br/>
        <span className='informations_title'>2021</span><span className='informations_comparaison'> : </span><span>YouthMobile - Mobile development formation</span><br/>
        <span className='informations_title'>2021</span><span className='informations_comparaison'> : </span><span>ASJA - Master's degree - Telecommunication</span><br/>
      </div>

      <div className='frame'>
        <span className='about_title'>Languages</span><br/>
        <span className='informations_title'>2020</span><span className='informations_comparaison'> : </span><span>Alliance Française -  DALF C2</span><br/>
        <span className='informations_title'>2014</span><span className='informations_comparaison'> : </span><span>English Center of Antsirabe - Certified in english</span><br/>
      </div>
      
    </div>
    </>
  )
}

export default About