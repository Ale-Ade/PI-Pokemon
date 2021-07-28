import React from 'react';
import { Link } from 'react-router-dom';
import css from '../../css/NavbarSimple.css';

function NavbarSimple() {
    return (
        <nav className={css.navbar}>
            <Link to='/home'>
                <img
                    className={css.mainIcon}
                    src='../../img/pokeAdd.gif'
                    alt='Page icon.'
                />
            </Link>
        </nav>
    );
}

export default NavbarSimple;
