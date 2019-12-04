import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import Authorization from './containers/Authorization';
import Patients from './containers/Patients';

const App = () => {
  return (
    <>
      {/* <Authorization /> */}
      <Patients />
    </>
  );
}

export default App;
