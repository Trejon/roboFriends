import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './containers/App';
// import serviceWorker from './serviceWorker';
import { searchRobots } from './reducers';
import 'tachyons';
import redux from 'redux';

const store = createStore(searchRobots)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>,
document.getElementById('root'));

