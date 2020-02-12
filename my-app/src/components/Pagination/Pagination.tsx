import React from 'react';
import { PaginationWrapper, PaginationElement } from './Pagination.style'

type PaginationType = {
    newsPerPage: number;
    totalNews: number;
    currentPage: number;
    paginate: Function;
}

export const PaginationForCard = ({ newsPerPage, totalNews, currentPage, paginate }: PaginationType) => {
    const pageNumbers = [];


    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <PaginationWrapper>
                {pageNumbers.map(number => (
                    <PaginationElement key={number} onClick={(event) => paginate(number, event)}>
                        {number}
                    </PaginationElement>
                ))}
            </PaginationWrapper>
        </nav>
    )
}
