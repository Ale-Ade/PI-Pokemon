import React from 'react';
import { useSelector } from 'react-redux';
import {
    useCompareAsc,
    useCompareDes,
    useCompareId,
    useCompareAttackAsc,
    useCompareAttackDes,
} from '../../hooks/useCompare';
import css from '../../css/SortButtons.css';

function SortButtons({ listPokemons, history }) {
    const stats = useSelector((state) => state.pokemonStats);

    const sortPkmns = (e, hook) => {
        const name = e.target.name;
        if (name === 'byProps') {
            listPokemons.sort(hook);
        } else {
            stats.sort(hook);
            const sortingArray = stats.map((el) => el.id);
            listPokemons.sort(function (a, b) {
                const A = Number.isInteger(Number(a.id))
                    ? parseInt(a.id)
                    : a.id;
                const B = Number.isInteger(Number(b.id))
                    ? parseInt(b.id)
                    : b.id;
                if (name === 'byStatsAsc') {
                    if (sortingArray.indexOf(A) > sortingArray.indexOf(B))
                        return 1;
                    return -1;
                }
                if (sortingArray.indexOf(A) < sortingArray.indexOf(B)) return 1;
                return -1;
            });
        }

        return history.push('/home');
    };

    return (
        <aside className={css.buttonContainer}>
            <h4>Order by…</h4>
            <button name='byProps' onClick={(e) => sortPkmns(e, useCompareId)}>
                Number
            </button>
            <button name='byProps' onClick={(e) => sortPkmns(e, useCompareAsc)}>
                Name <strong>↑</strong>
            </button>
            <button name='byProps' onClick={(e) => sortPkmns(e, useCompareDes)}>
                Name <strong>↓</strong>
            </button>
            <button
                name='byStatsAsc'
                onClick={(e) => sortPkmns(e, useCompareAttackAsc)}
            >
                Attack <strong>↑</strong>
            </button>
            <button
                name='byStatsDes'
                onClick={(e) => sortPkmns(e, useCompareAttackDes)}
            >
                Attack <strong>↓</strong>
            </button>
        </aside>
    );
}

export default SortButtons;
