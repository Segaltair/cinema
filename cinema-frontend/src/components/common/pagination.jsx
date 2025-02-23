import React from 'react'
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = ({itemsCount, pageSize, onPageChanged, currentPage}) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount === 1) return null;
    const pages = _.range(1, pagesCount + 1);

    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <button className="page-link" onClick={() => onPageChanged(page)}>{page}</button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    onPageChanged: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};
