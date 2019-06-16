import React from 'react';
import { Link } from 'react-router-dom';


import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

import {
  Menu
} from 'semantic-ui-react'




const Navigation = (props) =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>



  

const NavigationAuth = () =>
<React.Fragment>
    <Menu.Item>
      <Link to={routes.FRONTPAGE2}> <i aria-hidden="true" className="users disabled icon"></i>Home</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={routes.ACCOUNT}>About me</Link>
    </Menu.Item>


    


    <Menu.Item position="right">
      <SignOutButton />
    </Menu.Item>
  </React.Fragment>

const NavigationNonAuth = () =>
  <React.Fragment>
    <Menu.Item>
      <Link to={routes.FRONTPAGE}><i aria-hidden="true" className="users disabled icon"></i>Home</Link>
    </Menu.Item>

    <Menu.Item position="right">
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </Menu.Item>
    </React.Fragment>





export default Navigation;