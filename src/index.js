import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Photo from './Photo';


const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/photo" component={Photo} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
  
  //ReactDOM.render(<App />, document.getElementById('root'));