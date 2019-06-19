import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { TransitionExampleDuration} from '../Readings/TransitionExampleDuration'
import * as routes from '../../constants/routes';
import styled from "styled-components";
import {
  Embed,
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Navigation from '../Navigation';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Link as Link2 } from 'react-router-dom';
 
import './index.css';


// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


 
 
/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const Section = styled.div`
  margin: 40px 60px 0px 60px;
`;
const Nav = styled.div``;
const ActivityList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 80px;
`;
const Activity = styled.div`
  p {
    position: absolute;
    font-size: 26px;
  }
  svg {
    transition: transform 2s;
    position: absolute;
  }
  svg:hover {
    transform: scale(1.5);
  }
`;

const Main = styled.div`
  margin-top: 240px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
const MainText = styled.div`
  /* text-align: center; */
  h1 {
    text-align: center;
    font-size: 46px;
  }
`;
const MainImage = styled.div``;
const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
const Date = styled.div``;
const Add = styled.div``;

class HomepageHeading extends React.Component {
  constructor (props ) {
    super(props)
      this.state = { 
        loading : false,
        stage : 0
    }
  }

  handleClick=(e) => { 
    this.setState({
      stage: this.state.stage + 1
  })
  }
   
  render () {
    const { mobile} = this.props;
    return (
      <div><Container text>
      <TransitionExampleDuration show='3500' children={<div>
         <div>
  <Segment inverted>
  <Link
    activeclass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {700}
> <Button className="medium ui button"
         inverted basic color='blue' 
        onClick={this.handleClick}
     
      >
        <div>
         <h1>Profile Summary</h1> 
         <i className="caret square down outline icon"></i>
         </div>
        </Button></Link>
    </Segment>
    </div> 
    <div>
  <Segment inverted>
  <Link
    activeclass="active"
    to="sectionProject"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {700}
> <Button className="medium ui button"
         inverted basic color='blue' 
        onClick={this.handleClick}
     
      >
        <div>
         <h1> Projects</h1> 
         <i className="caret square down outline icon"></i>
         </div>
        </Button></Link>
    </Segment>
    </div>
    <div>
  <Segment inverted>
  <Link
    activeclass="active"
    to="section1"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {700}
> <Button className="medium ui button"
         inverted basic color='blue' 
        onClick={this.handleClick}>
        <div>
         <h1>Contact</h1> 
         <i className="caret square down outline icon"></i>
         </div>
        </Button></Link>
    </Segment>
    </div>
       <br />
      </div>}/>
    </Container></div>
    );
  }
}



HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = { visible: true}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >

          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 550, padding: '1em 0em' }}
            vertical
          >
              
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              style={{background:'black' }}

            >
              <Container >
              <Navigation/>
               {/*  <Menu.Item as='a' active>
                  Home
                </Menu.Item>
                <Menu.Item as='a'>Work</Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                <Menu.Item as='a'>Careers</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Log in
                  </Button>
                  <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>*/} 
              </Container>
            </Menu>
           <HomepageHeading /> 
          </Segment>
        </Visibility>
           {children} 
      </Responsive>
    )
  }
}


DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
      <Navigation/>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 150, padding: '2em 0em', background:'#1b1c1d' }}
            vertical
          
          >
            <Container style={{overflow:'auto'}} >
              <div  style={{float:'left'}}>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />    
                </Menu.Item>
              </Menu></div>
              <div style={{float:'right', marginRight:'20px'}}> <h1>Rajiv.K</h1></div>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const FrontPage2 = () => (

  <ResponsiveContainer >
    <Segment  style={{ padding: '8em 0em' }} vertical>
      <Grid id="section1" container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column  width={8}>
            <Header as='h3' style={{ fontSize: '40px' }}>
              Rajiv Khushiram
            </Header>
            <Header as='h3' style={{ fontSize: '16px' }}>
              CBD Melbourne / +61 481187062/ rajivkhushiram@hotmail.com
            </Header>
            <p style={{ fontSize: '1.33em' }}>
           
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Summary:
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Open-source enthusiast and an IT graduate of RMIT University seeking a position as a part-time developer. 
            I am a co-operative and contributive full stack developer with over <strong>3</strong> years experience in the Web Design and Development industry. My passion for coding and design comes from a desire to build things that are meaningful, functional and pleasing to the eye. </p>
            <p style={{ fontSize: '1.33em' }}> 
            A highly organized and detailed-oriented individual who has a good sense of time management. 
             </p>
           
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          <div className="ui fluid image">
      <a className="ui left corner label">
        <i className="heart icon"></i>
      </a>
      <center><Image bordered rounded size='large' src='https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-1/p240x240/24862479_2071266543092952_7064062963233407011_n.jpg?_nc_cat=111&_nc_ht=scontent-syd2-1.xx&oh=1cd1e56d7e7ccada1830445556d17e4f&oe=5D94AA46' /></center>
    </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
          <Link
    activeclass="active"
    to="sectionProject"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {700}
> <Button size='huge'>View My Projects</Button></Link>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "When you dream the code, the code dreams in you"
            </Header>
            <p style={{ fontSize: '1.33em' }}>TechLead</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "Code from anywhere...being in the zone"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://semantic-ui.com/examples/assets/images/avatar/nan.jpg' />
              <b>code</b> Self expression
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <br id="sectionProject"/>
        <Header  as='h3' style={{ fontSize: '2em' }}>
          Mobile Web App "Reviews-App" (Reactjs-Redux-Firebase)
        </Header>
        <Project1Video />
        <p style={{ fontSize: '1.33em' }}>
          Car dealerships in Australia struggle to build their brand and gain customer trust, and struggle even more to reach past customers for things like servicing.
         My team and I helped in providing a system that generates reviews from current customers to help drive trust in future customers, 
         as well as allow them to keep in touch with past customers. </p>
         <ol>
  <li>The system offers way to firstly send a text SMS  with the review link to the registered customer on car purchase. </li>
  <li>Optionally the agent can snap a photo of the customer and send the picture by SMS to the latter.</li>
  <li> A photo gallery containing all images taken for various products of a business</li>
</ol> 
        


        <p>
        </p>
        <Link2 to={routes.PROJECTREVIEWS}> 
        <Button size='large'>
          Go to Site ( Mobile-Only)
        </Button></Link2>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
        </Divider>
        <Header as='h3' style={{  fontSize: '2em' }}>
          Software Developement
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
          it's really true. It took years of gene splicing and combinatory DNA research, but our
          bananas can really dance.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>
    <div id = 'wawa'> </div>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
                <List.Item as='a'>Religious Ceremonies</List.Item>
                <List.Item as='a'>Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Projects' />
              <List link inverted>
                <List.Item as='a'></List.Item>
                <List.Item as='a'>Python</List.Item>
                <List.Item as='a'>How To Access</List.Item>
                <List.Item as='a'>Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>

)

const Project1Video = () => (
  <Embed id='x4BJbGYPbVA' placeholder='/images/image-16by9.png' source='youtube' />
)

export default FrontPage2


 

