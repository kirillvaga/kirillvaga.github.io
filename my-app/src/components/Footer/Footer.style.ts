import styled from 'styled-components';
import { Layout } from 'antd';
import { Main_color } from '../../const/actionConst'
const { Footer } = Layout;

export const FooterWithStyles = styled(Footer) `
 text-align: center;
 background: ${Main_color}; 
 color: #979797;
`;


