import React from 'react';
import { Link } from 'react-router-dom';
import { Segment, Button} from 'semantic-ui-react';


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
      <Link to={routes.FRONTPAGE2}> 
      <Segment inverted>
      <Button inverted color='blue' 
    ><i className="home icon"></i>
        Home
      </Button>
  </Segment>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={routes.ACCOUNT}> 
      <Segment inverted> <Button inverted color='blue' 
    ><i className="user circle outline icon"></i>
        About me
      </Button></Segment></Link>
    </Menu.Item>
    <Menu.Item> 
      <Segment inverted> <Button inverted color='blue' 
    ><i className="user circle outline icon"></i>
        Projects
      </Button></Segment>
    </Menu.Item>


    


    <Menu.Item position="right">
      <SignOutButton />
    </Menu.Item>
  </React.Fragment>

const NavigationNonAuth = () =>
  <React.Fragment>
    <Menu.Item>
      <Link to={routes.FRONTPAGE}> <Button size='huge' inverted color='blue'
      aria-hidden="true" 
    ><i className="home icon"></i>
        Home
      </Button></Link>
    </Menu.Item>

    <Menu.Item position="right">
      <Link to={routes.SIGN_IN}> 
      <div>
      <Button inverted size='huge'  
    ><i className="sign-in icon"></i>
        Sign-In
      </Button>
  </div></Link>
    </Menu.Item>
    </React.Fragment>





export default Navigation;