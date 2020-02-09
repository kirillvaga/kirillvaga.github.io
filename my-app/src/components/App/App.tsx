import React from 'react';
import Header from '../Header/Header'
import Main from '../Main/Main'


type AppProps = {
  userInfo: any;
}

const App = (props: AppProps) => {
  return (
    <div className="App">
      <Header userInfo={props.userInfo.userName} />
      <Main/>
    </div>
  );
}

export default App;
