import React from 'react';
import { NavLink } from 'react-router-dom';
import css from '../../css/Initial.css';

function Initial() {
    return (
        <div className={css.container}>
            <header className={css.header}>
                <div className={css.pContainer}>
                    <h3>Individual Project - Pokemon</h3>
                </div>
                <div className={css.buttonContainer}>
                    <NavLink to='/home'>
                        <button className={css.button}>HOME</button>
                    </NavLink>
                </div>
            </header>
            <section className={css.section}>
                <article id='aboutPokemon' className={css.articleToRight}>
                    <p>
                        Pokémon are creatures of all shapes and sizes who live
                        in the wild or alongside humans. For the most part,
                        Pokémon do not speak except to utter their names.
                    </p>
                    <img
                        src='./img/pokeAbout.jpg'
                        alt='About pokemons.'
                    />
                </article>
                <article id='aboutTypes' className={css.articleToLeft}>
                    <p>
                        Types refer to different elemental properties associated
                        with both Pokémon and their moves. <br /> There are 18
                        total official types of Pokémon.
                    </p>
                    <img
                        src='./img/pokemonType.jpg'
                        alt='Types of pokemons.'
                    />
                </article>
                <article id='aboutProject' className={css.articleToRight}>
                    <p>
                        This project is part of Henry Labs where we integrate
                        all the knowledge acquired in the bootcamp. Technologies
                        used: <br /> React.
                        <br /> Redux.
                        <br /> Express.
                        <br /> NodeJS.
                        <br /> Sequelize
                        <br /> PostgreSQL.
                    </p>
                    <img src='./img/pokemon.jpg' alt='Pokemon logo.' />
                </article>
            </section>
        </div>
    );
}

export default Initial;
