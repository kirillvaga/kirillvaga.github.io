import React from 'react';
import {Header} from '../Header/Header'
import Main from '../Main/Main'
import {FooterSection} from '../Footer/Footer'

type userNameType = {
  firstName: string
  lastName: string
}

type myStateType = {
  userName: userNameType;
}

const myState: myStateType = {
  userName: {
    firstName: 'Kirill',
    lastName: 'Vaha'
  }
};

export const App = () => {
  return (<><Header userInfo={myState.userName} /><Main/><FooterSection/></>);
}
