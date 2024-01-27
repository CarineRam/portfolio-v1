import React from 'react';
import '../styles/contact.css';
import tel from '../assets/tel.png';
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';


function Contact() {
  return (
    <>
      <div className='contact' id='contact'>
        <div className='title1'>CONTACT</div>
        <div  id='texte_works' className='mx-auto col-sm-10 col-md-10 col-11'>
{/* 1 ère ligne */}     
        <div className='row align-self-top w-100 pt-4 mt-4 mb-4 projects-row'>
            <div className='mx-auto d-flex offseted justify-content-center workboxcol pt-0 col-sm-2 col-md-2'>
              <img className='logo_contact' src={tel} alt='logo téléphone'></img>
            </div>
            <div className='mx-auto pt-0 offseted col-sm-4 col-md-4'>
              <span className='contact_description'>+261 33 75 406 15</span>
            </div>

            <div className='mx-auto d-flex offseted justify-content-center workboxcol pt-0 col-sm-2 col-md-2'>
              <img className='logo_contact' src={mail} alt='logo mail'></img>
            </div>
            <div className='mx-auto pt-0 offseted col-sm-4 col-md-4'>
              <span className='contact_description'>carineramandimby@gmail.com</span>
            </div>
        </div>
{/* 2 éme ligne */}
        <div className='row align-self-top w-100 pt-4 mt-4 mb-4 projects-row'>
            <div className='mx-auto d-flex offseted justify-content-center workboxcol pt-0 col-sm-2 col-md-2'>
              <img className='logo_contact' src={tel} alt='logo téléphone'></img>
            </div>
            <div className='mx-auto pt-0 offseted col-sm-4 col-md-4'>
              <span className='contact_description'>+261 32 84 091 22</span>
            </div>

            <div className='mx-auto d-flex offseted justify-content-center workboxcol pt-0 col-sm-2 col-md-2'>
              <img className='logo_contact' src={linkedin} alt='logo téléphone'></img>
            </div>
            <div className='mx-auto pt-0 offseted col-sm-4 col-md-4'>
              <span className='contact_description'>in/ny-aina-ramandimby-7bbba419b</span>
            </div>
        </div>
{/* 3 éme ligne */}
        <div className='row align-self-top w-100 pt-4 mt-4 mb-4 projects-row'>
            <div className='mx-auto d-flex offseted justify-content-center workboxcol pt-0 col-sm-2 col-md-2'>
              <img className='logo_contact' src={tel} alt='logo téléphone'></img>
            </div>
            <div className='mx-auto pt-0 offseted col-sm-4 col-md-4'>
              <span className='contact_description'>+261 34 02 081 37</span>
            </div>

            <div className='mx-auto d-flex offseted justify-content-center workboxcol pt-0 col-sm-2 col-md-2'>
              <img className='logo_contact' src={github} alt='logo téléphone'></img>
            </div>
            <div className='mx-auto pt-0 offseted col-sm-4 col-md-4'>
              <span className='contact_description'>github.com/CarineRam</span>
            </div>
        </div>

        </div>
      
      
      </div>
    </>
  )
}

export default Contact