import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './containers/LoginForm';
import AppContainer from './App.style';
import TodoPage from './containers/TodoPage';

function App() {
  return (
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path='/' component={LoginForm} />
          <Route path='/todo' component={TodoPage} />
        </Switch>
      </Router>
    </AppContainer>
  );
}

export default App;
