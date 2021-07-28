import React from 'react';
import css from '../../css/Footer.css';

function Footer({ history }) {
    const aboutMeLocation = history.location.pathname === '/aboutme';
    const addLocation = history.location.pathname === '/home/add';
    return (
        <footer>
            <div className={
                aboutMeLocation || addLocation
                    ? css.footerSimple
                    : css.footer
            }>
            <img
                src='../..//img/pokeFooter.gif'
                alt='Pokemon sprite GIF'
                width='40px'
                height='40px'
            />
            <h4>Individual Project - HENRY </h4>
             <p>
                 Alejandro Acevedo Osorio
                 <a href="https://www.linkedin.com/in/alejandro-acevedo-osorio-215949212">Linkedin</a>
                 <a href="https://github.com/Ale-Ade">GitHub</a>
             </p>
             </div>
            
        </footer>
    );
}

export default Footer;
