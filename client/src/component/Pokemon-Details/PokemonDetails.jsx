/* eslint-disable */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getPokemonDetails } from '../../action/get';
import Spinner from '../Spinner/Spinner';
import css from '../../css/PokemonDetails.css';

function PokemonDetails({ match }) {
    const pokemonDetails = useSelector((state) => state.pokemonDetails);
    const dispatch = useDispatch();

    const id = match.params.id;

    useEffect(async () => {
        dispatch(getPokemonDetails(id));
    }, []);

    if (!pokemonDetails) return <Redirect to='/home' />;
    if (Object.keys(pokemonDetails).length === 0) return <Spinner />;

    return (
        <div className={css.container}>
            <h2>{`#${pokemonDetails.id}`}</h2>
            <h2>{pokemonDetails.name}</h2>
            {Number.isInteger(Number(pokemonDetails.id)) ? (
                <img
                    src={
                        pokemonDetails.sprites.other['official-artwork']
                            .front_default
                    }
                    alt={`${pokemonDetails.name} sprite.`}
                />
            ) : (
                <img
                    src={pokemonDetails.sprite}
                    alt={`${pokemonDetails.name} sprite.`}
                />
            )}

            <ul>
                <li>{`Health Points: ${
                    pokemonDetails.hp
                        ? pokemonDetails.hp
                        : pokemonDetails.stats[0].base_stat
                }`}</li>
                <li>{`Attack: ${
                    pokemonDetails.attack
                        ? pokemonDetails.attack
                        : pokemonDetails.stats[1].base_stat
                }`}</li>
                <li>{`Defense: ${
                    pokemonDetails.defense
                        ? pokemonDetails.defense
                        : pokemonDetails.stats[2].base_stat
                }`}</li>
                <li>{`Speed: ${
                    pokemonDetails.speed
                        ? pokemonDetails.speed
                        : pokemonDetails.stats[5].base_stat
                }`}</li>
                <li>{`Height: ${pokemonDetails.height}`}</li>
                <li>{`Weight: ${pokemonDetails.weight}`}</li>
            </ul>
            <h3>Types</h3>
            <section className={css.types}>
                {pokemonDetails.types.map((type, index) =>
                    type.type ? (
                        <img
                            key={`type-${index}`}
                            src={`../../img/types/${type.type.name}.png`}
                            alt={`${type.name} icon.`}
                        />
                    ) : (
                        <img
                            key={`type-${index}`}
                            src={`../../img/types/${type.name}.png`}
                            alt={`${type.name} icon.`}
                        />
                    )
                )}
            </section>
        </div>
    );
}

export default PokemonDetails;
