import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import css from '../../css/Navbar.css';

function Navbar({ history }) {
    const [input, setInput] = useState('');
    const allPokemons = useSelector((state) => state.allPokemons);
    const currentLocation = history.location.pathname;
    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input) return;
        const searchPkmn = allPokemons.find(
            (pkmn) => pkmn.name === input.toLowerCase()
        );
        setInput('');
        searchPkmn
            ? window.location.replace(`/pokemon/${searchPkmn.id}`)
            : alert('That pokemon does not exist.');
    };

    return (
        <nav className={css.navbar}>
            <Link to='/#top'>
                <img
                    className={css.mainIcon}
                    src='../../img/principal.gif'
                    alt='Page icon.'
                />
            </Link>
            {currentLocation === '/home' ? (
                <h2>Home</h2>
            ) : currentLocation.includes('/pokemon/') ? (
                <h2>Pokemon Details</h2>
            ) : null}
            <div className={css.formContainer}>
                <form
                    className={
                        currentLocation.includes('/pokemon')
                            ? `${css.formHidden}`
                            : css.form
                    }
                    role='search'
                    onSubmit={handleSubmit}
                >
                    <label className={css.label} htmlFor='search'></label>
                    <input
                        className={css.search}
                        type='search'
                        id='search'
                        name='search'
                        value={input}
                        placeholder='Search...'
                        autoFocus={true}
                        required
                        onChange={handleChange}
                    />
                    <button className={css.buttonSearch} type='submit'>
                        Go
                    </button>
                </form>
            </div> 
            {currentLocation !== '/home/add' ? (
                <Link to='/home/add'>
                    <button className={css.button}>Add pokemon</button>
                </Link>
            ) : null}
        </nav>
    );
}

export default Navbar;
