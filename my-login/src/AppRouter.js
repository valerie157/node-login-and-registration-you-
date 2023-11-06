import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import StudentForm from './Components/StudentForm';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={RegistrationForm} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/add-student" component={StudentForm} />
        {/* Add more routes here as needed */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
