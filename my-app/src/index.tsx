import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { Provider } from 'react-redux'
import store from '../src/store/store';


const myState = {
  userName: {
    firstName: 'Kirill',
    lastName: 'Vaha'
  },
  userAge: {
    year: '1997'
  }
};


ReactDOM.render(
  <Provider store={store}>
    <App userInfo={myState} />
  </Provider>,
  document.getElementById('root'));
