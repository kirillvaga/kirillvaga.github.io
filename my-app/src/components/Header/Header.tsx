import React from 'react';
import { SectionHeader, UlElement, LiElement, Link, LiCart, Cart } from './Header.style'

type userInfoType = {
  firstName: string
  lastName: string
}

type HeaderProps = {
  userInfo: userInfoType;
}

export const Header = (props: HeaderProps) => {

  const { firstName, lastName } = props.userInfo;

  return (
    <SectionHeader>
      <UlElement>
        <LiElement><Link>{firstName}{lastName}</Link></LiElement>
        <LiElement><Link>Sign In</Link></LiElement>
        <LiCart>
          <Cart>
            empty
          </Cart>
        </LiCart>
      </UlElement>
    </SectionHeader>
  )
}