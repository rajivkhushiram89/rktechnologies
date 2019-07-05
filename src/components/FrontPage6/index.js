import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Hello from '../FrontPage7';
import $ from 'jquery'; 
import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import logo from './wawarev.png'; 
import {
  Label,
  Embed,
  Card,
  Button,
  Container,
  Divider,
  Grid,
  Input,
  Progress,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Dropdown,
  Visibility,Table, Rating,Transition
} from "semantic-ui-react";
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Link as Link2 } from 'react-router-dom';
import * as routes from '../../constants/routes';
import './index.scss'
import "pure-react-carousel/dist/react-carousel.es.css";
import { NavBarr } from './NavBar'
import ImageCarousel from '../ImageCarousel'

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
class HomepageHeading extends React.Component {
  constructor(props) {
    super(props);
  this.state = {  }
  }
  toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))
  render () {
    const { mobile }= this.state
    return (
        <React.Fragment>
          <Container text>
            
    <Header
      as='h1'
      content="Hi, I'm Rajiv, a Full-Stack Developer"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '3.0em' : '3em',
      }}
    />
  <br></br>

  <br></br>
  <Link
                activeclass="active"
                to="section1"
                spy={true}
                smooth={true}
                duration= {700}
            ><Button color='brown' inverted animated='vertical'>
            <Button.Content visible><h3>Summary</h3> <Icon name='arrow alternate circle right' /></Button.Content>
            <Button.Content  hidden>Click To Start<Icon name='arrow down' /></Button.Content>
          </Button></Link>
  </Container>
        </React.Fragment>
    )
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
  state = { navVisible: true }

  toggleVisibility = () => this.setState(prevState => ({ navVisible: !prevState.navVisible }))



  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { navVisible } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Particles>
        <Segment
          id="HOME"
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
          >
            <Container>
            <Menu.Item>
            <Link
                activeclass="active"
                to="HOME"
                spy={true}
                smooth={true}
                duration= {700}
            ><i aria-hidden="true" className="rendact big icon"></i></Link>
              </Menu.Item>
              
 <Menu.Item><Link
                activeclass="active"
                to="sectionProject"
                spy={true}
                smooth={true}
                duration= {700}
            >Portfolio</Link></Menu.Item>

            <Menu.Item><Link
                            activeclass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration= {700}
                        >Contact</Link></Menu.Item>
             
              <Menu.Menu position='right'>  
              <Menu.Item>
                  <Input icon="search" placeholder="Search..." />
                </Menu.Item>
              <Menu.Item>
              <Link2 to={routes.REPOSITORY}> 
<br></br>
        <Button color='orange' inverted size='large'><i className="git icon"></i>
         Github Repo 
        </Button></Link2></Menu.Item>

             {/*    <Menu.Item><Button inverted={!fixed}>
              <Link2 to={routes.SIGN_UP}>  Register</Link2>
                </Button></Menu.Item>*/} 
              </Menu.Menu>
            </Container>
          </Menu>
          
          <HomepageHeading />
        </Segment></Particles>
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
  state = { menuClass: "" };

  handleUpdate = (e, { calculations }) => {
    let menuClass;

    menuClass = calculations.bottomPassed === true && calculations.direction === "down"
      ? "fixed"
      : ""

    menuClass = calculations.bottomVisible === true && calculations.direction === "up"
      ? ""
      : "fixed"

    this.setState({ menuClass});
    
  };

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (

      <Responsive
      getWidth={getWidth}
      maxWidth={Responsive.onlyMobile.maxWidth}
    >
     <Segment
          inverted
          id="HOME"
          textAlign='center'
          style={{ minHeight: 350, padding: '1em 0em' }}
          vertical
        >
          <Container>
            <Visibility 
            className="visibility"
            once={false}
            onBottomPassedReverse={this.handleUpdate}
            onBottomPassed={this.handleUpdate}
          >
           <Menu secondary className={this.state.menuClass}>
          
           <Link
                activeclass="active"
                to="HOME"
                spy={true}
                smooth={true}
                duration= {700}
            > <Menu.Item > Home
              </Menu.Item></Link>


              <Link
                activeclass="active"
                to="sectionProject"
                spy={true}
                smooth={true}
                duration= {700}
            > <Menu.Item>Work</Menu.Item></Link>

              <Link
                activeclass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration= {700}
            >
              <Menu.Item>Contact</Menu.Item>
            </Link>
              
              <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Menu.Item>
                <Menu.Item as='a'>Company</Menu.Item>
                </Menu.Item>
              </Responsive>
              <Menu.Menu position="right">
              <Link2 to={routes.SIGN_IN}><Menu.Item>Log in</Menu.Item></Link2>
              
              {/*<Link2 to={routes.SIGN_UP}><Menu.Item>Sign Up</Menu.Item></Link2>*/} 
              
              </Menu.Menu>
             
            </Menu>
            </Visibility>
        </Container>
        <HomepageHeading mobile />
      </Segment>
      {children}
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

const FrontPage6 = () => (
  <ResponsiveContainer>
    <Segment id="section1"  style={{ padding: '4em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row >
          <Grid.Column   width={8}>
            <div >
            <Header   as='h3' style={{ fontSize: '40px' }}>
              Rajiv Khushiram
            </Header>
            <Header as='h3' style={{ fontSize: '16px' }}>
              CBD Melbourne / +61 481187062/ rajivkhushiram@hotmail.com
            </Header></div>
            <p style={{ fontSize: '1.33em' }}>
           
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Summary:
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            An IT postgraduate of RMIT University seeking a position as a part-time developer. 
            I am a full stack developer with over <strong>3 years experience </strong> in the  IT industry. My passion for coding and design comes from a desire to build things that are meaningful, functional and pleasing to the eye. </p>
            <p style={{ fontSize: '1.33em' }}> 
             </p>
             <Header as='h3' style={{ fontSize: '1.4em' }}>
  Software Consultant - <a href="https://binksandassociates.com.au/contact-us/"> Binks & Associates Pty Ltd. (Live Melbourne Projects)</a>   --Melboune, 11/17 -12/18
</Header><p style={{ fontSize: '1.33em' }}>Contributed to the design and implementation of a web app to so that an tenants and landowners can relay information their Owners Corporation.</p>
            
           <p style={{ fontSize: '1.33em' }}> </p>
           <Header as='h3' style={{ fontSize: '1.4em' }}>
  Software Engineer - <a href="http://www.lealgroup.com/information_technology.aspx#cis">Cisolve International Ltd.</a>   --Mauritius, 07/14 -7/17
</Header><p style={{ fontSize: '1.33em' }}> Deployed features of a Leave Management System such as Email Notification and Outlook Calendar API calls combined with front end design. 
Supported the development of an IOS app capable of supporting PDF-Annotations. </p>
<Header as='h3' style={{ fontSize: '1.4em' }}>
  IT Trainee - <a href="https://www.hmtechnologies.mu/">Harel Mallac Tech</a>   --Mauritius, 06/13 -12/13
</Header>
<p style={{ fontSize: '1.33em' }}> Contributed in the design of IT infrastructure from cabling to software in office buildings. </p>
<center><Link
    activeclass="active"
    to="sectionProject"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {700}
>  <Button  color="grey" size='huge'>View Projects</Button></Link></center><br/>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          <div className="ui fluid image">
      <a className="ui left corner label">
        <i className="heart icon"></i>
      </a>
<center>
     <br></br> <Grid.Row>
          <Grid.Column textAlign='center'>
         
          <img src="https://scontent-syd2-1.xx.fbcdn.net/v/t1.0-1/p240x240/24862479_2071266543092952_7064062963233407011_n.jpg?_nc_cat=111&amp;_nc_ht=scontent-syd2-1.xx&amp;oh=1cd1e56d7e7ccada1830445556d17e4f&amp;oe=5D94AA46" className="ui large avatar bordered rounded image"></img>
          
          <TableExamplePadded/>
         

          </Grid.Column>
        </Grid.Row></center>
    </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment>
    <Grid container stackable verticalAlign='middle'>
        <Grid.Row >
          <Grid.Column   width={8}>
    
</Grid.Column>
</Grid.Row>
</Grid>
    </Segment>
   
    <Segment id='PORJECTS' style={{ padding: '3em 0em' }} vertical>
      <Container id="bigup"  style={{ width: '80%!important'}} text>
        <br id="sectionProject"/>
        {/* pass in variable of projectList*/}

        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '0.5em 0em', textTransform: 'uppercase' }}
        >

        </Divider>
       <center> <Header as='h3' style={{  fontSize: '3em' }}>
       <Button size='massive' disabled inverted> Projects</Button>
        </Header> 
        <Header as='h3' style={{  fontSize: '1.6em' }}>
        1. PostGrad Project: Reviews App
        </Header></center>
       

   {/*-----------Projects----------------------*/}
   <Card fluid>
   <Embed
    autoplay={false}
    color='white'
    hd={false}
    id='x4BJbGYPbVA'
    iframe={{
      style: {
        padding: 10,
      },
    }}
    placeholder={logo}
    source='youtube'
  />
    <Card.Content>
      <Card.Header> <h2>Stack:  <Label  size='massive'  image>
      Sketch
    </Label><Label  size='massive' image>
      Redux
    </Label><Label size='massive' image>
      React
    </Label><Label size='massive' image>
      Firebase
    </Label>
    <Label size='massive' image>
      Semantic UI
    </Label></h2> </Card.Header>
      <Card.Meta>
        <span className='date'> <strong>Role:</strong> Project Manager</span>
      </Card.Meta>
      <Card.Description>
      <p style={{ fontSize: '1.33em' }}> The web app developed captures customer picture when picking up their purchased product as well as customer details. Once the record is saved, a reviews URL link and photo download URL link are sent to the customer through a messaging service. With the information acquired from the customers and their purchased products, a company can then be able to send targeted messages to specific customers. The motive of the reviews from the current customers is to help drive trust in prospective customers, as well as allow them to keep in touch with past customers if given permission.</p> 
      </Card.Description>
      <Card.Description>
        <br></br>
        <h3>Demo: <a href="https://rajivkhushiram-reviews-project.firebaseapp.com">https://rajivkhushiram-reviews-project.firebaseapp.com</a> </h3>
        <h3>Github:  <a href="https://github.com/Rajiv-Khushiram/Reviews-App-For-Business">https://github.com/Rajiv-Khushiram/Reviews-App-For-Business</a> </h3>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='eye' />
        13 Views
      </a>
    </Card.Content>
  </Card>
  <br></br>
  <br></br>

  <hr></hr>
  <br></br>
  <br></br>

  <Header as='h3' style={{  fontSize: '1.5em' }}>
          2. OO Design Patterns: Avengers End Game
        </Header>
  <Card fluid>
    <Image src='http://d13z1xw8270sfc.cloudfront.net/origin/523870/1532954117402_avengersflagbunting.jpg'  wrapped ui={false} />
    <Card.Content>
      <Card.Header><h2>Stack: <Label size='massive' image>
      
      Java
     
    </Label><Label size='massive' image>
      
    Design Patterns
     
    </Label><Label size='massive' image>
      
      Swing
     
    </Label></h2></Card.Header>
      <Card.Meta>
        <span className='date'> <strong>Role:</strong> Developer</span>
      </Card.Meta>
      <Card.Description>
      <p style={{ fontSize: '1.33em' }}>   This game provides a playfield of 10x10 honey comb grid whereby each grid unit represents a location on the board. Each player assumes control of the pieces that have been assigned to. On each turn the player can choose between which of his pieces is to be moved and which pieces ability is to be casted. The aim of the player is to take down the enemy team using coordinated movement and ability casting among the pieces in the team. 
      Created and made use of <strong>creational, structural</strong> and <strong>behavioral patterns</strong></p>
      </Card.Description>
      <Card.Description>
        <br></br>
        <h3>Github:  <a href="https://github.com/Rajiv-Khushiram/Avengers_End_Game">https://github.com/Rajiv-Khushiram/Avengers_End_Game</a> </h3>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='eye' />
        10 Views
      </a>
    </Card.Content>
  </Card>
  <br></br>
  <br></br>

  <hr></hr>
  <br></br>
  <br></br>

  <Header as='h3' style={{  fontSize: '1.5em' }}>
          3. IOT :Medical Appointment System (Web)
        </Header>
  <Card fluid>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
    <Card.Header><h2>Stack: 
    <Label size='massive' image>
      Python
    </Label><Label  size='massive' image>
      Flask
    </Label><Label size='massive' image>
      Raspberry Pi + SENSEHAT
    </Label>
    <Label size='massive' image>
      Bootstrap
    </Label></h2></Card.Header>
      <Card.Meta>
        <span className='date'><strong>Role:</strong> Lead Developer </span>
      </Card.Meta>
      <Card.Description>
      <p style={{ fontSize: '1.33em' }}>This app was developed for the medical industry which means to increase flux of patients within
      a medical clinic for doctors. Whenever a doctor asks to see the next patient, their Advisor Pi (Raspberry Pi) interacts with Reception Pi to
check:
If patient has arrived, pull up the medical record for the patient and call them to the doctor's office
Otherwise: Inform the doctor that they are free until the next appointment </p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='eye' />
        10 Views
      </a>
    </Card.Content>
  </Card>


  <Header as='h3' style={{  fontSize: '1.5em' }}>
          4. Analysis of Algorithms
        </Header>
  <Card fluid>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header></Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        This project was done as part of a univisersity assignment 
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>

  

  
  
   {/*-----------Projects----------------------*/}



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
    <Segment id="contact"  style={{ padding: '6em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column floated='right' width={6}>
          <div className="ui fluid image">
      <a className="ui left corner label">
        <i className="heart icon"></i>
      </a>
      <Card style={{ maxHeight: '400px'}} fluid>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    </Card>
    </div>
          </Grid.Column>
          <Grid.Column id='sectionContact'  width={8}>
          <center><Card>
            <Header as='h3' style={{ fontSize: '40px', textAlign:'center' }}>
              Contact
            </Header>
            <div style={{textAlign:'center'}}>
            <Link2 to={routes.REPOSITORY}> <Button size='massive'   icon='github' /> </Link2>
            <Link2 to={routes.LINKEDIN}>   <Button  size='massive'   color='linkedin' icon='linkedin' /> </Link2>
            <Link2 to={routes.INSTAGRAM}>   <Button  size='massive'   color='instagram' icon='instagram' /></Link2>
        
            </div></Card></center>
           
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        </Grid.Row>
      </Grid>
    </Segment>
    <div id = 'wawa'> </div>
    <Segment inverted vertical style={{ padding: '3em 0em' }}>
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

function Particles({ children }) {
  return (
    <div style={{ position: 'relative' }}>
      <ReactParticles
        params={particlesConfig}
        style={{
          position: 'absolute',
          zIndex: 1,
          left: 0,
          right: 0,
          bottom: 0,
          top: 0
        }}
      />
      {children && <div style={{ position: 'relative' }}>{children}</div>}
    </div>
  );
}

const TableExamplePadded = () => (
  <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign='center'>Tools</Table.HeaderCell>
          <Table.HeaderCell  textAlign='center'  width={10}>Proficiency</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
  
      <Table.Body>
      <Table.Row>
          <Table.Cell textAlign='center' positive>Git</Table.Cell>
          <Table.Cell  textAlign='center' positive  >
          <ProgressExampleIndicating  color={'green'} percent='75' />
          </Table.Cell>
        </Table.Row>
      <Table.Row>
          <Table.Cell textAlign='center' warning>Java</Table.Cell>
          <Table.Cell textAlign='center'  width={10}  positive>
          <ProgressExampleIndicating   color={'yellow'} percent='65' />
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign='center'  warning>HTML/CSS/JS</Table.Cell>
          <Table.Cell textAlign='center'  width={10}  positive>
          <ProgressExampleIndicating  color={'yellow'} percent='60' />
          </Table.Cell>
        </Table.Row>
        
        <Table.Row>
          <Table.Cell textAlign='center'  positive>React</Table.Cell>
          <Table.Cell textAlign='center'  width={10}  positive>
          <ProgressExampleIndicating color={'green'}  percent='75' />
          </Table.Cell>
          </Table.Row>
  
        <Table.Row>
          <Table.Cell textAlign='center' warning>Node.js</Table.Cell>
          <Table.Cell textAlign='center'  width={10}  positive>
          <ProgressExampleIndicating color={'yellow'}  percent='40' />
          </Table.Cell>
        </Table.Row>
  
        <Table.Row>
          <Table.Cell textAlign='center' warning>Python</Table.Cell>
          <Table.Cell  textAlign='center'  width={10}  positive>
          <ProgressExampleIndicating  color={'yellow'} percent='57' />
          </Table.Cell>
        </Table.Row>
        
        <Table.Row>
          <Table.Cell  textAlign='center' positive>Dev Ops</Table.Cell>
          <Table.Cell  textAlign='center' positive   width={10}>
          <ProgressExampleIndicating color={'yellow'} percent='52' />
          </Table.Cell>
        </Table.Row>
    
      </Table.Body>
    </Table>
  )
  
  const ProgressExampleIndicating = (props) => (
      <div>
         <Progress active progress size='large' color={props.color} percent={props.percent} >
          
        </Progress></div>
      
      )

      let styleObj = {
        width: "300px",
        height: "200px",
        borderRadius: "16px",
        background: "#9b59b6"
      };
      
      class PackageComponent extends React.Component {
        render() {
          return <Container style={styleObj}>{this.props.children}</Container>;
        }
      }
      
  
  export default FrontPage6