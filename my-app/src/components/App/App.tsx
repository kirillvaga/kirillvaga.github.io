import React from 'react';
import {Header} from '../Header/Header'
import Main from '../Main/Main'
import {FooterSection} from '../Footer/Footer'

const myState = {
  userName: {
    firstName: 'Kirill',
    lastName: 'Vaha'
  },
  userAge: {
    year: '1997'
  }
};

export const App = () => {
  return (<><Header userInfo={myState.userName} /><Main/><FooterSection/></>);
}
