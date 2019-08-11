import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { ResetGlobalStyled } from './style.js';
import App from './App';
import './static/fontIcons/fonts.css';

ReactDOM.render(
  <Fragment>
    <App />
    <ResetGlobalStyled />
  </Fragment>, 
  document.getElementById('root')
);
