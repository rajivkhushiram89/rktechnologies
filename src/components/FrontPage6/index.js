import PropTypes from 'prop-types'
import React, { Component } from 'react'

import ReactParticles from 'react-particles-js';
import particlesConfig from './particles-config.js';
import { TransitionExampleDuration} from '../Readings/TransitionExampleDuration'
import { Link  } from 'react-scroll'
import { Link as Link2 } from 'react-router-dom';
import * as routes from '../../constants/routes';
import './index.scss'
import "pure-react-carousel/dist/react-carousel.es.css";

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

  Visibility,Table
} from "semantic-ui-react";



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
        
        <Segment
          id="HOME"
          inverted
          textAlign='center'
          style={{ minHeight: 700, padding: '0.5em 0em' }}
          vertical
        >
          <Menu 
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
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
          
          <Particles><HomepageHeading /></Particles>
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
           <Menu style={{ zIndex:'3' }} secondary className={this.state.menuClass}>
          
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
        <Particles><HomepageHeading mobile /></Particles>
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
            <Label as='a'  disabled   size='huge' color='orange' ribbon>
          Summary :
        </Label>
            <p style={{ fontSize: '1.33em' }}> 
            I am a full stack developer with over <strong>3 years experience </strong> in the  IT industry. My passion for coding and design comes from a desire to build things that are meaningful, functional and pleasing to the eye. </p>
            <p style={{ fontSize: '1.33em' }}> 
             </p>
             <Label as='a' disabled   size='large' color='blue' ribbon>
          Experience:
        </Label>
             <Header as='h3' style={{ fontSize: '1.4em' }}>
  1. Software Consultant - <a href="https://binksandassociates.com.au/contact-us/"> Binks & Associates Pty Ltd. (Live Melbourne Projects)</a>   --Melboune, 10/17 -12/17
</Header><p style={{ fontSize: '1.33em' }}>Prototyped a web app so that an tenants and property-owners of  an owners corporation can respond effectively to queries with a property</p>
            
           <p style={{ fontSize: '1.33em' }}> </p>
           <Header as='h3' style={{ fontSize: '1.4em' }}>
  2. Software Engineer - <a href="http://www.lealgroup.com/information_technology.aspx#cis">Cisolve International Ltd.</a>   --Mauritius, 07/14 -7/17
</Header><p style={{ fontSize: '1.33em' }}> Deployed features of a Leave Management System such as Email Notification and Outlook Calendar API calls combined with front end design. 
Supported the development of an IOS app capable of supporting PDF-Annotations. </p>
<Header as='h3' style={{ fontSize: '1.4em' }}>
  3. IT Trainee - <a href="https://www.hmtechnologies.mu/">Harel Mallac Technologies</a>   --Mauritius, 06/13 -12/13
</Header>
<p style={{ fontSize: '1.33em' }}> Contributed in the design of IT infrastructure from cabling to software in office buildings. </p>
<center><Link
    activeclass="active"
    to="sectionProject"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {700}
>  <Button inverted color="orange" size='large'>View Projects</Button></Link></center><br/>
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
   
    <Segment id='PORJECTS' style={{ padding: '1.5em 0em' }} vertical>
      <Container id="bigup"  style={{ width: '600px!important'}} text>
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
        </Header> </center><Header as='h3' style={{fontSize: '1.6em',  margin:'auto', padding: '0em  3em  0.3em 3em', margin:'auto' }}>
        1. PostGrad Project: Reviews App
        </Header>
        
       

   {/*-----------Projects----------------------*/}
   <Card style={{ padding: '2em  2em  2em 2em', margin:'auto', width:'80%', maxWidth:'1800px'}}>
   
   <Embed style={{ maxHeight:'200px !important'}}
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
      <Card.Header>  </Card.Header>
      <Card.Meta>
        <span className='date'> <strong>Role:</strong> Project Manager</span>
      </Card.Meta>
      <Card.Description>
      <List.Item as='a'>
      <Icon name='right triangle' /> <strong>Key Learnings:</strong>  React-Redux-Firebase, Severless architecture, Agile methodologies, Firebase API, CI/CD (Cloud build), Slack, Trello
      <List.Content>
      </List.Content>
    </List.Item><br></br>
      <p style={{ fontSize: '1.33em' }}>
          
         The web app developed captures customer picture when picking up their purchased product as well as customer details.<br></br>
          Once the record is saved, a reviews URL link and photo download URL link are sent to the customer</p>
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
  <Card style={{ padding: '2em  2em  2em 2em', margin:'auto', width:'80%', maxWidth:'1800px'}}>
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

  {/*   <TransitionExampleDuration show='2000' children={<Header as='h3' style={{  fontSize: '1.5em' }}>
          3. IOT :Medical Appointment System (Web)
        </Header>}/>
  <Card fluid style={{ padding: '2em  2em  2em 2em', margin:'auto', width:'80%', maxWidth:'1800px'}}>
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
  <Card fluid style={{ padding: '2em  2em  2em 2em', margin:'auto', width:'80%', maxWidth:'1800px'}}>
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
  </Card>*/}

  

  
  
   {/*-----------Projects----------------------*/}
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
      <Card style={{ maxHeight: '400px', padding: '2em  3em  2em 3em'}} fluid>
    <Image src='' wrapped ui={false} />
    </Card>
    </div>
          </Grid.Column>
          <Grid.Column id='sectionContact'  width={8}>
          <center> <Header as='h3' style={{ color:'white', fontSize: '40px', textAlign:'center' }}>
              Contact
            </Header><Card style={{background:'transparent' ,padding: '2em  3em  2em 3em'}}>
           
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
              <Header inverted as='h4' content='Website Stack:' />
              <List link inverted>
                <List.Item as='a'>Twilio</List.Item>
                <List.Item as='a'>REACT</List.Item>
                <List.Item as='a'>FIREBASE</List.Item>
                <List.Item as='a'>GCP</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Projects' />
              <List link inverted>
                <List.Item as='a'>Design Patterns</List.Item>
                <List.Item as='a'>SERVERLESS</List.Item>
                <List.Item as='a'>CI/CD</List.Item>
                <List.Item as='a'>Prototyping</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Built With Semantic UI
              </Header>
              <p>
                 Coldwar Themed Look & Feel made with Particle.JS -- 
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