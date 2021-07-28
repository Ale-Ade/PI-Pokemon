import React from 'react';
import { NavLink } from 'react-router-dom';
import useQuery from '../../hooks/useQuery';
import css from '../../css/Pagination.css';

function Pagination({ pokemonsPerPage, totalPkmns, paginate }) {
    const query = useQuery().get('page') || 1;
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(totalPkmns / pokemonsPerPage); i++) {
        pageNumber.push(i);
    }

    return (
        <nav className={css.navpag}>
            <ul className={css.navpagUl}>
                {pageNumber.map((number, index) => (
                    <NavLink
                        to={`/home?page=${number}`}
                        key={`page-${index}`}
                        className={
                            parseInt(query) === number
                                ? `${css.navpagLi} ${css.active}`
                                : css.navpagLi
                        }
                        onClick={() => paginate(number)}
                    >
                        <li key={`li-${index}`}>{number}</li>
                    </NavLink>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;
