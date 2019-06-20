import React from 'react'
import { Link } from 'react-router-dom'
import { Link as Link2 } from 'react-scroll'

import { Menu, Segment, Button } from 'semantic-ui-react'
import AuthUserContext from '../Session/AuthUserContext'
import SignOutButton from '../SignOut'
import * as routes from '../../constants/routes'

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
          <Button inverted color='blue'>
            <i className='home icon'>Home</i>
          </Button>
        </Segment>
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to={routes.ACCOUNT}>
        <Segment inverted> <Button inverted color='blue'>
          <i className='user circle outline icon' />
        About me
        </Button></Segment></Link>
    </Menu.Item>
    <Menu.Item>
      <Segment inverted>
        <Link
          activeclass='active'
          to='section1'
          smooth='true'
          offset={-70}
          duration={700}
        >
          <Button inverted color='blue'>
            <i className='user circle outline icon' />
        Projects
          </Button></Link></Segment>
    </Menu.Item>

    <Menu.Item position='right'>
      <SignOutButton />
    </Menu.Item></React.Fragment>)

const NavigationNonAuth = () => (
  <React.Fragment>
    <Menu.Item >
      <Link to={routes.FRONTPAGE}>
        <Button className='fluid ui button' inverted size='big'>
          <i className='home icon' /> Home
        </Button>  </Link>
    </Menu.Item>

    <Menu.Item >
      <Link2 activeclass='active'
        to='section1'
        spy={true}
        smooth='true'
        offset={-70}
        duration={700} >
        <Button className='fluid ui button' inverted size='big'>
          <i className='id badge outline icon' /> Profile Summary
        </Button>  </Link2>
    </Menu.Item>

    <Menu.Item >
      <Link2 activeclass='active'
        to='sectionProject'
        spy={true}
        smooth='true'
        offset={-70}
        duration={700}>
        <Button className='fluid ui button' inverted size='big'>
          <i className='git icon' />Projects
        </Button>  </Link2>
    </Menu.Item>

    <Menu.Item >
      <Link2 activeclass='active'
        to='sectionContact'
        spy={true}
        smooth='true'
        offset={-70}
        duration={700} >
        <Button className='fluid ui button' inverted size='big'>
          <i className='phone volume icon' /> Contact
        </Button>  </Link2>
    </Menu.Item>
    <Menu.Item position='right'>
      <center><Link to={routes.SIGN_IN}>
        <div className='item'>
          <Button inverted size='big'>
            <i className='sign-in icon' /> Sign-In
          </Button>  </div></Link></center>
    </Menu.Item>
  </React.Fragment>)

export default Navigation
