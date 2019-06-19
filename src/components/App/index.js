import React, { Component } from 'react';
import '../../index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import Navigation from '../Navigation';
import FrontPage from '../FrontPage';
import FrontPage2 from '../FrontPage2';

import ReadingsPage from '../Readings';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import AccountPage from '../Account';
import withAuthentication from '../Session/withAuthentication';
import { firebase, db } from '../../firebase';
import * as routes from '../../constants/routes';
import { Container} from "semantic-ui-react";


import Dashboard from '../Dashboard';


class App extends Component {


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
            exact path={routes.FRONTPAGE2}
            component={() =>
              <FrontPage2
                { ...this.state }
              />
            }
          />
          <Route path={routes.PROJECTREVIEWS} component={() => { 
     window.location.href = 'https://rajivkhushiram-reviews-project.web.app/'; 
     return null;
}}/>

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