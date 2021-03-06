import styled from 'styled-components';
import { Main_color } from '../../const/actionConst'

export const SectionHeader = styled.section`
  width: 100%;
  height: 45px;
  background-color: ${Main_color};
`;

export const UlElement = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 45%;
  list-style-type: none;
`;
export const LiElement = styled.li`
  margin-right: 40px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #979797;
  font-family: 'Montserrat';
`;

export const LiCart = styled.li`
  margin: 0, 0, 0, 64px;
  width: 20%;
  height: 45px;
  background-color: #00c8c8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`

export const Cart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
