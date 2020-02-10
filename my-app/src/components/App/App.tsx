import React from 'react';
import {Header} from '../Header/Header'
import Main from '../Main/Main'
import {FooterSection} from '../Footer/Footer'

const myState = {
  userName: {
    firstName: 'Kirill',
    lastName: 'Vaha'
  }
};

export const App = () => {
  return (<><Header userInfo={myState.userName} /><Main/><FooterSection/></>);
}
