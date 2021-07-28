import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    filterByApi,
    filterByUsers,
    filterByType,
} from '../../action/filter';
import { getAllPokemons } from '../../action/get';
import css from '../../css/Filters.css';

function Filters({ history }) {
    const types = useSelector((state) => state.types);
    const allPokemons = useSelector((state) => state.allPokemons);
    const dispatch = useDispatch();
    const handleFilter = (e) => {
        const target = e.target;
        const idButton = target.id;
        const value = target.value;
        types.forEach((type) => {
            if (value === type.name) {
                dispatch(filterByType(value));
                return history.push('/home');
            }
        });

        if (idButton === 'created') {
            dispatch(filterByUsers());
            if (!allPokemons) {
                alert('No pokemons created by users yet.');
                dispatch(getAllPokemons());
            }
            return history.push('/home');
        }
        if (idButton === 'originals') {
            dispatch(filterByApi());
            return history.push('/home');
        }

        if (idButton === 'clear') {
            dispatch(getAllPokemons());
            document.getElementById('selector').value = -1;
            return history.push('/home');
        }
    };

    return (
        <aside className={css.buttonContainer}>
            <h4>Filter by…</h4>
            <select
                className={css.byTypes}
                id='selector'
                onChange={handleFilter}
            >
                <option value='-1'>Select a type</option>
                {types.map((type) => (
                    <option key={`type-${type.id}`} value={type.name}>
                        {type.name}
                    </option>
                ))}
            </select>
            <button onClick={handleFilter} id='originals'>
                Originals pokemons
            </button>
            <button onClick={handleFilter} id='created'>
                Pokemons created by users
            </button>

            <button onClick={handleFilter} id='clear'>
                Delete Filters
            </button>
        </aside>
    );
}

export default Filters;
