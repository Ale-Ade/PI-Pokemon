/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import css from '../../css/NumberOfPages.css';

function NumberOfPages({ setPerPage, setPkmnsPerPage, perPage, history }) {
    const dispatch = useDispatch();

    useEffect(() => {
        setPerPage(12);
    }, []);

    const handleChange = (e) => {
        setPerPage(e.target.value);
        dispatch(setPkmnsPerPage(perPage));
    };

    return (
        <select
            className={css.selectContainer}
            name='pkmnsPerPage'
            onChange={handleChange}
            key='select-A'
        >
            <option value='12'>Pokemons per page</option>
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='20'>20</option>
        </select>
    );
}

export default NumberOfPages;
