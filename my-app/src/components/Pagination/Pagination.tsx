import React from 'react';
import { PaginationWrapper, PaginationElement } from './Pagination.style'

type PaginationType = {
    newsPerPage: number;
    totalNews: number;
    paginate: Function;
}

export const Pagination = ({ newsPerPage, totalNews, paginate }: PaginationType) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <PaginationWrapper>
                {pageNumbers.map(number => (
                    <PaginationElement key={number} onClick={() => paginate(number)}>
                        {number}
                    </PaginationElement>
                ))}
            </PaginationWrapper>
        </nav>



        //     <nav>
        //     <ul className="pagination">
        //         {pageNumbers.map(number => (
        //             <li key={number} className='page-item'>
        //                 <a href="!#" onClick={() => paginate(number)} className='page-link' style={{ color: '#00c8c8' }}> {number} </a>
        //             </li>
        //         ))}
        //     </ul>
        // </nav>
    )
}
