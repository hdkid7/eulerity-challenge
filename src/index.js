import React from 'react';
import "./index.css"
import ReactDOM from 'react-dom';
import Example from './js/components/Example/Example.js';
import store from "./js/store"
import {Provider} from "react-redux"



ReactDOM.render(
  <Provider store={store}>
    <Example/>
  </Provider>
  ,
  document.getElementById('root')
);

