import React from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main'
import FooterSection from '../Footer/Footer'

const myState = {
  userName: {
    firstName: 'Kirill',
    lastName: 'Vaha'
  },
  userAge: {
    year: '1997'
  }
};

const App = () => {
  return (
    <div className="App">
      <Header userInfo={myState.userName} />
      <Main/>
      <FooterSection/>
    </div>
  );
}

export default App;
