import React from 'react';
import { Header } from '../Header/Header'
import Main from '../Main/Main'
import { FooterSection } from '../Footer/Footer'

const userData = {
  userName: {
    firstName: 'Kirill',
    lastName: 'Vaha'
  }
};

export const App = () => {
  return <><Header userInfo={userData.userName} /><Main /><FooterSection /></>
}
