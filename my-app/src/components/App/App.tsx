import React from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main'
import FooterSection from '../Footer/Footer'


type AppProps = {
  userInfo: any;
}

const App = (props: AppProps) => {
  return (
    <div className="App">
      <Header userInfo={props.userInfo.userName} />
      <Main/>
      <FooterSection/>
    </div>
  );
}

export default App;
