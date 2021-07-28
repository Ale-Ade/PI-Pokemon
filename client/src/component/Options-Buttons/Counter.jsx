import React from 'react';
import { useSelector } from 'react-redux';
import { LIMIT } from '../../action/constant';
import css from '../../css/Counter.css';

function Counter() {
    const allPokemons = useSelector((state) => state.allPokemons);
    const countTotal = allPokemons.length;
    const countOriginal = allPokemons.filter((el) =>
        Number.isInteger(Number(el.id))
    ).length;
    const countFromUsers = countTotal - countOriginal;
    const availableSockets = LIMIT - countTotal;

    return (
        <div className={css.container}>
            <h4>Pokemon Counter</h4>
            <h5>
                Total: <strong>{countTotal}</strong>
            </h5>
            <h5>
                By API: <strong>{countOriginal}</strong>
            </h5>
            <h5>
                By users: <strong>{countFromUsers}</strong>
            </h5>
            <h5>
                Available: <strong>{availableSockets}</strong>
            </h5>
        </div>
    );
}

export default Counter;
