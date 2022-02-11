import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

const casino = [
  {name : 'Somasundaram'},
  {email : 'soms2m@gmail.com'},
  {password : 'welcome'},
  {balance : 9.99}
];

localStorage.setItem('casino', JSON.stringify(casino));
localStorage.setItem('casinoUserResult', '');

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
