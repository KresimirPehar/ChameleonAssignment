import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';
import TodoPage from '../TodoPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LoginForm} />
        <Route path='/todo' component={TodoPage} />
      </Switch>
    </Router>
  );
}

export default App;
