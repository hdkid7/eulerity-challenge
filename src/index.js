import React from 'react';
import "./index.css"
import ReactDOM from 'react-dom';
import App from "./js/components/App/App"
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.render(
  <Router>
    <App/>
  </Router>
  ,
  document.getElementById('root')
);

