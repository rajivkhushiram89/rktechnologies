import React, { Component } from 'react'
import '../../index.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import FrontPage2 from '../FrontPage2'

import ReadingsPage from '../Readings'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import AccountPage from '../Account'
import withAuthentication from '../Session/withAuthentication'
import { firebase } from '../../firebase'
import * as routes from '../../constants/routes'
import FrontPage3 from '../FrontPage3'
import FrontPage4 from '../FrontPage4' // responsive template
import FrontPage5 from '../FrontPage5'


class App extends Component {
  componentDidMount () {
    firebase.auth.onAuthStateChanged(authUser => {
    })
  }

  render () {
    return (
      <Router>
        <React.Fragment>
          <Route
            exact path={routes.FRONTPAGE2}
            component={() =>
              <FrontPage5
                {...this.state}
              />
            }
          />
          <Route path={routes.PROJECTREVIEWS} component={() => {
            window.location.href = 'https://rajivkhushiram-reviews-project.web.app/'; return null
          }} />

          <Route path={routes.REPOSITORY} component={() => {
            window.location.href = 'https://github.com/Rajiv-Khushiram?tab=repositories'; return null
          }} />

          <Route
            path={routes.READING_LIST}
            component={() =>
              <ReadingsPage
                {...this.state}
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
    )
  }
}

export default withAuthentication(App)
