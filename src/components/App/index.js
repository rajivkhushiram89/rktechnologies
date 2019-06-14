import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navigation from '../Navigation';
import FrontPage from '../FrontPage';
import ReadingsPage from '../Readings';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import { firebase, db } from '../../firebase';
import * as routes from '../../constants/routes';

import './index.css';
import Dashboard from '../Dashboard';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
 
    };


  }

  componentDidMount() {

    firebase.auth.onAuthStateChanged(authUser => {
      if (authUser) {

        this.setState({  });
      }
    });
  }

  
  render() {
    return (
      <Router>
        
         <React.Fragment>

          <Route
            exact path={routes.FRONTPAGE}
            component={() =>
              <FrontPage
                { ...this.state }
              />
            }
          />

          <Route
            path={routes.READING_LIST}
            component={() =>
              <ReadingsPage
                { ...this.state }
              />
            }
          />

          <Route
            exact path={routes.SIGN_UP}
            component={SignUpPage}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={SignInPage}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={PasswordForgetPage}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={AccountPage}
          />
        </React.Fragment>
      </Router>
    );
  }
}

export default withAuthentication(App);