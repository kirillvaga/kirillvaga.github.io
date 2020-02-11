import styled from 'styled-components';
import { Card } from 'antd';

export const WrapperForCard = styled.div`
    &:nth-child(4n+1) {
        padding-left: 40px; 
      }
    padding: 30px; 
`

export const CardWithStyle = styled(Card) `
    width: 500px; 
    height:300px;
`;