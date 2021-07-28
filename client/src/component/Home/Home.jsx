/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllPokemons, getTypes } from '../../action/get';
import { setPkmnsPerPage } from '../../action/set';
import useQuery from '../../hooks/useQuery';
import Spinner from '../Spinner/Spinner';
import NumberOfPages from '../Options-Buttons/NumberOfPage';
import SortButtons from '../Options-Buttons/SortButtons';
import Card from './Card';
import Pagination from '../Options-Buttons/Pagination';
import Filters from '../Options-Buttons/Filters';
import Counter from '../Options-Buttons/Counter';
import css from '../../css/Home.css';

function Home({ history }) {
    const allPokemons = useSelector((state) => state.allPokemons);
    const pokemonsPerPage = useSelector((state) => state.pokemonsPerPage);
    const dispatch = useDispatch();
    const query = useQuery().get('page');
    const [currentPage, setCurrentPage] = useState(query || 1);
    const [perPage, setPerPage] = useState(pokemonsPerPage);
    useEffect(() => {
        dispatch(getAllPokemons());
        dispatch(getTypes());
    }, []);

    if (allPokemons.length === 0) return <Spinner />;

    const indexOfLastPkmn = currentPage * perPage;
    const indexOfFirstPkmn = indexOfLastPkmn - perPage;
    const currentPkmns = allPokemons.slice(indexOfFirstPkmn, indexOfLastPkmn);

    const paginate = (number) => {
        setCurrentPage(number);
        window.scrollTo(0, 0);
    };

    return (
        <div className={css.container} id='home'>
            <section className={css.asideContainer}>
                <input
                    id='check'
                    type='checkbox'
                    name='check'
                    className={css.hamburguerCheck}
                />
                <label htmlFor='check' className={css.hamburguerContainer}>
                    <div className={css.hamburguer}></div>
                    <div className={css.hamburguer}></div>
                    <div className={css.hamburguer}></div>
                </label>
                <article className={css.asideScroll}>
                    <NumberOfPages
                        setPerPage={setPerPage}
                        setPkmnsPerPage={setPkmnsPerPage}
                        perPage={perPage}
                        history={history}
                    />
                </article>
                <article className={css.asideSort}>
                    <SortButtons listPokemons={allPokemons} history={history} />
                </article>
                <article className={css.asideFilter}>
                    <Filters history={history} pokemons={allPokemons} />
                </article>
                <article className={css.counter}>
                    <Counter />
                </article>
            </section>
            <section className={css.cardsContainer}>
                {currentPkmns.map((pokemon, index) => {
                    return (
                        <a
                            key={`poke-${index}`}
                            href={`/pokemon/${pokemon.id}`}
                        >
                            <Card
                                className={css.card}
                                name={pokemon.name}
                                pokeId={pokemon.id}
                                key={index}
                                id={index}
                            />
                        </a>
                    );
                })}
            </section>
            <section className={css.pagesContainer}>
                <Pagination
                    pokemonsPerPage={perPage}
                    totalPkmns={allPokemons.length}
                    paginate={paginate}
                />
            </section>
        </div>
    );
}

export default Home;
