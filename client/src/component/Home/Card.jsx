/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setPkmnsStats } from '../../action/set';
import { SERVER_URL as SERVER_MINE } from '../../action/constant';
import Spinner from '../Spinner/Spinner';
import css from '../../css/Card.css';

const SERVER_API = 'https://pokeapi.co/api/v2/pokemon/';

function Card({ name, pokeId }) {
    const dispatch = useDispatch();
    const [type, setType] = useState([]);
    const [sprite, setSprite] = useState('');
    const [loading, setLoading] = useState(false);
    let idCreated = null;
    useEffect(() => {
        const getImgAndTypes = async () => {
            setLoading(true);
            let res = null;
            if (Number.isInteger(Number(pokeId))) {
                res = await axios.get(`${SERVER_API}${pokeId}`);
                dispatch(
                    setPkmnsStats({
                        id: res.data.id,
                        hp: res.data.stats[0].base_stat,
                        attack: res.data.stats[1].base_stat,
                        defense: res.data.stats[2].base_stat,
                        speed: res.data.stats[5].base_stat,
                        sprite:
                            res.data.sprites.other['official-artwork']
                                .front_default,
                        types: res.data.types.map((el) => el.type.name),
                        height: res.data.height,
                        weight: res.data.weight,
                    })
                );
                setType(res.data.types.map((el) => el.type.name));
                pokeId <= 151
                    ? setSprite(`../../img/sprites/${pokeId}-front-n.gif`)
                    : setSprite(
                          res.data.sprites.other['official-artwork']
                              .front_default
                      );
            } else {
                res = await axios.get(`${SERVER_MINE}/pokemons/${pokeId}`);
                dispatch(
                    setPkmnsStats({
                        id: res.data.id,
                        hp: res.data.hp,
                        attack: res.data.attack,
                        defense: res.data.defense,
                        speed: res.data.speed,
                        sprite: res.data.sprite,
                        types: res.data.types.map((el) => el.name),
                        height: res.data.height,
                        weight: res.data.weight,
                    })
                );
                setSprite(res.data.sprite);
                setType(res.data.types.map((el) => el.name));
            }

            setLoading(false);
        };
        getImgAndTypes();
    }, [pokeId]);

    if (loading) return <Spinner />;

    if (!Number.isInteger(Number(pokeId))) {
        idCreated = `${pokeId.substring(0, 4)}-created`;
    }

    return (
        <div className={`${css.container} ${css[type[0]]}`}>
            <h3 className={css.id}>
                {idCreated ? `#${idCreated}` : `#${pokeId}`}
            </h3>
            <img className={css.sprite} src={sprite} alt='Pokemon sprite.' />
            <h3 className={css.name}>{name}</h3>
            {type.length > 1 ? (
                <section className={css.types}>
                    <article>
                        <h4>{`${type[0]}`}</h4>
                        <img
                            src={`./img/types/${type[0]}.png`}
                            alt='Type icon.'
                        />
                    </article>
                    <article>
                        <h4>{`${type[1]}`}</h4>
                        <img
                            src={`./img/types/${type[1]}.png`}
                            alt='Type icon.'
                        />
                    </article>
                </section>
            ) : (
                <article className={css.typeSingle}>
                    <h4>{type[0]}</h4>
                    <img src={`./img/types/${type[0]}.png`} alt='Type icon.' />
                </article>
            )}
        </div>
    );
}

export default Card;
