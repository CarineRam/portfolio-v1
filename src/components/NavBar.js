import React from 'react';
import logostart from '../assets/jouer.png';
import '../styles/navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function NavBar() {

  return (
    <>
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid d-flex justify-content-end">
                <a className='navbar-brand' href="#start">
                    <img src={logostart} className='logostart' alt=""/>
                </a>    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" > 
                        <li className="nav-item li">
                            <a className='nav-link' href='#start'>start</a>
                        </li>
                        <li className="nav-item li">
                            <a className='nav-link' href='#works'>works</a>
                        </li>
                        <li className="nav-item li">
                            <a className='nav-link' href='#skills'>skills</a>
                        </li>
                        <li className="nav-item li">
                            <a className='nav-link' href='#about'>about</a>
                        </li>
                        <li className="nav-item li">
                            <a className='nav-link' href="#contact">contact</a>
                        </li>

                    </ul>
                </div>
            </div>    
        </nav>
        <div className='ligne'></div>
    </> 
        
  )
}

export default NavBar