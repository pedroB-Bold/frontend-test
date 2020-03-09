import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './screens/HomePage';
import MoviePage from './screens/MoviePage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/:moviePage" component={MoviePage} />
      </Switch>
    </Router>
  )
}

export default App;
