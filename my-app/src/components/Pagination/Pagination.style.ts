import styled from 'styled-components';
import { Main_color } from '../../const/actionConst';

// interface PaginationElementProps  {
//     active: number;
// }

export const PaginationWrapper = styled.div`
    display: flex;
`

export const PaginationElement = styled.button`
    border: 1px solid ${Main_color};
    border-radius: .25rem;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 1px 20px 1px;
    color: #00c8c8;
    &:hover {
        background: #00c8c8;
        opacity: 0.5;
        color:  ${Main_color};
    }
 `

 export const PaginationElementActive = styled(PaginationElement)`
    color: ${Main_color};
    background-color: #00c8c8;
 `
 