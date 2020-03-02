import React from 'react';
import { PaginationWrapper, PaginationElement, PaginationElementActive } from './Pagination.style'

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
                {pageNumbers.map( number => {
                    const PuginationButton = currentPage !== number ? PaginationElement : PaginationElementActive;
                    return  <PuginationButton key={number} onClick={() => paginate(number)}>{number}</PuginationButton> 
                })}
            </PaginationWrapper>
        </nav>
    )
}

