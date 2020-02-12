import styled from 'styled-components';
import { Main_color } from '../../const/actionConst';

export const PaginationWrapper = styled.div`
    display: flex;
`


export const PaginationElement = styled.div`
    border: 1px solid ${Main_color};
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
        color:  ${Main_color};
    }
`