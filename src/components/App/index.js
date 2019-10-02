import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ReadingsPage from '../Readings'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import AccountPage from '../Account'
import withAuthentication from '../Session/withAuthentication'
import { firebase } from '../../firebase'
import * as routes from '../../constants/routes'
import 'semantic-ui-css/semantic.min.css'
import HomePageLayout from '../HomePageLayout'
import HomePageLayout2  from '../HomePageLayout2'
import ContactPage from '../Contact'


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
            exact path={routes.FRONTPAGE}
            component={() =>
              <HomePageLayout
                {...this.state}
              />
            }
          />
          <Route path={routes.PROJECTREVIEWS} component={() => {
            window.location.href = 'https://rajivkhushiram-reviews-project.web.app/'; return null
          }} />

          <Route path={routes.LINKEDIN} component={() => {
            window.location.href = 'https://rajivkhushiram-reviews-project.web.app/'; return null
          }} />

          <Route path={routes.REPOSITORY} component={() => {
            window.location.href = 'https://github.com/Rajiv-Khushiram?tab=repositories'; return null
          }} />

          <Route path={routes.LINKEDIN} component={() => {
            window.location.href = 'https://www.linkedin.com/in/rajiv-khushiram-14805793/'; return null
          }} />

          <Route path={routes.INSTAGRAM} component={() => {
            window.location.href = 'https://www.instagram.com/rajivck/'; return null
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
            path={routes.CONTACT}
            component={() =>
              <ContactPage
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
