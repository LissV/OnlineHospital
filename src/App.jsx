import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Authorization from './containers/Authorization';
import Patients from './containers/Patients';

const App = () => {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/signIn'>
          <Authorization />
        </Route>
        <Route path='/patients'>
        <Patients />
        </Route>
        <Redirect exact  from="/" to="/signIn" />
      </Switch>
    </Router>
    </>
  );
}

export default App;
