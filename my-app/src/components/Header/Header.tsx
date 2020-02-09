import React from 'react';
import styled from 'styled-components';

const SectionHeader = styled.section`
  width           : 100%;
  height          : 45px;
  background-color: #333333;
`;

const UlElement = styled.ul`
  display        : flex;
  align-items    : center;
  margin-left    : 45%;
  list-style-type: none;
`;
const LiElement = styled.li`
  margin-right: 40px;
`;

const Link = styled.a`
  text-decoration: none;
  color          : #979797;
  font-family    : 'Montserrat';
`;

const LiCart = styled.li`
  margin-left     : 64px;
  margin-right    : 0px;
  width           : 20%;
  height          : 45px;
  background-color: #00c8c8;
  display         : flex;
  align-items     : center;
  justify-content : center;
  transition      : opacity 0.5s;
  cursor          : pointer;
  &:hover {
    opacity: 0.5;
  }
`

const Cart = styled.div`
  width          : 100%;
  display        : flex;
  align-items    : center;
  justify-content: space-around;
`;



type HeaderProps = {
  userInfo: any;
}

const Header = (props: HeaderProps) => {
  console.log(props.userInfo.lastName);
  return (
    <SectionHeader>
      <UlElement>
        <LiElement><Link>{props.userInfo.firstName}{props.userInfo.lastName}</Link></LiElement>
        <LiElement><Link>Sign In</Link></LiElement>
        <LiCart>
          <Cart>
            <p>empty</p>
          </Cart>
        </LiCart>
      </UlElement>
    </SectionHeader>

  )
}

export default Header;