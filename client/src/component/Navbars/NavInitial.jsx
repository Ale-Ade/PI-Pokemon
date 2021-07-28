import React from 'react';
import css from '../../css/NavInitial.css';

function NavInitial() {
    return (
        <nav className={css.navbar}>
            <div>
                <a href='#top'>
                    <img src='./img/pokemonInit.png' alt='Page icon.' />
                </a>
            </div>
            <hr />
            <a href='#aboutPokemon'>
                <button className={css.button}>About Pokemon</button>
            </a>
            <a href='#aboutTypes'>
                <button className={css.button}>About Pokemon's Types</button>
            </a>
            <a href='#aboutProject'>
                <button className={css.button}>About This Project</button>
            </a>
        </nav>
    );
}

export default NavInitial;
