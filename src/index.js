import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import PhotoPage from './PhotoPage';

import './tailwindStyle.css'

const routing = (
    <Router>
      <div>
        <Route exact path="/stock-photo/" component={App} />
        <Route path="/stock-photo/photo" component={PhotoPage} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
  
  //ReactDOM.render(<App />, document.getElementById('root'));
  //доделать поиск
  //доделать страницу с фото
  //запилить стили
  ///
