import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Button} from 'semantic-ui-react';
import AuthUserContext from '../Session/AuthUserContext';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';

const Navigation = (props) => 
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>

const NavigationAuth = () => (
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
      <Segment inverted> <Button inverted color='blue'>
        <i className="user circle outline icon"></i>
        About me
      </Button></Segment></Link>
    </Menu.Item>
    <Menu.Item> 
      <Segment inverted>
      <Link
    activeclass="active"
    to="section1"
    smooth='true'
    offset={-70}
    duration= {700}
>  <Button inverted color='blue' 
    ><i className="user circle outline icon"></i>
        Projects
      </Button></Link></Segment>
    </Menu.Item>

    <Menu.Item position="right">
      <SignOutButton />
    </Menu.Item></React.Fragment>)




const NavigationNonAuth = () =>(
  <React.Fragment>
    <Menu.Item >
    <Link to={routes.FRONTPAGE}>
      
      <Button className="fluid ui button" inverted size='big'  
    >  <i className="home icon"></i>Home
     </Button>  </Link>
    </Menu.Item>

    <Menu.Item position="right">
    <center><Link to={routes.SIGN_IN}>
      <div className="item">  
      <Button inverted size='big'  
    >  <i className="sign-in icon"></i>Sign-In
     </Button>  </div></Link></center>
    </Menu.Item>
    </React.Fragment>)

export default Navigation;