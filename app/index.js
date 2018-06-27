import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

require('./index.css');

require('dotenv').config();

ReactDOM.render(<App />, document.getElementById('App'));
