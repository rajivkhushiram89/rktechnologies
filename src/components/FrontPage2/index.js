import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TransitionExampleDuration} from '../Readings/TransitionExampleDuration'
import * as routes from '../../constants/routes';
import styled from "styled-components";
import Particles from 'react-particles-js'
import {
  Embed,
  Button,
  Container,
  Divider,
  Grid,
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
  Visibility,Table, Rating
} from 'semantic-ui-react'
import FrontPage4 from '../FrontPage4'
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

const HomepageHeading = ({ mobile }) => (
  <Container >
    <FrontPage4 />
  </Container>
)



HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = { visible: true }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state
    const { activeItem } = this.state

    return (
      
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
         
            
          <FrontPage4 />
          <div class="text-overlay">
      <h1>Rajiv Khushiram</h1>
      </div>
       

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
        
        <FrontPage4 />
          <div class="text-overlay">
      <h1>Boom shakala!</h1>
      </div>
       
          {children}
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <React.Fragment>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
    </React.Fragment>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}


const FrontPage2 = () => (

  <ResponsiveContainer  >
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
            I am a co-operative and contributive full stack developer with over <strong>3 years experience </strong> in the  <strong>web</strong> and  <strong>mobile app</strong> industry. My passion for coding and design comes from a desire to build things that are meaningful, functional and pleasing to the eye. </p>
            <p style={{ fontSize: '1.33em' }}> 
             </p>
             <Header as='h3' style={{ fontSize: '1.4em' }}>
  Software Consultant - <a href="https://binksandassociates.com.au/"> Binks & Associates Pty Ltd. (Live Melbourne Projects)</a>   --Melboune, 11/17 -12/18
</Header><p style={{ fontSize: '1.33em' }}>Designed and implemented a PoC for a web portal system using a Java based Portal. The portal was developed using Liferay and integrates a BPM system to process tenant complaints for an owners corporation.  </p>
            
           <p style={{ fontSize: '1.33em' }}> </p>
           <Header as='h3' style={{ fontSize: '1.4em' }}>
  Software Engineer - <a href="http://www.lealgroup.com/information_technology.aspx#cis">Cisolve International Ltd.</a>   --Mauritius, 07/14 -7/17
</Header><p style={{ fontSize: '1.33em' }}> Deployed features of a Leave Management System such as Email Notification and Outlook Calendar API calls combined with front end design. 
Supported the development of an IOS app capable of supporting PDF-Annotations. </p>
<Header as='h3' style={{ fontSize: '1.4em' }}>
  IT Trainee - <a href="https://www.hmtechnologies.mu/">Harel Mallac Tech</a>   --Mauritius, 06/13 -12/13
</Header>
<p style={{ fontSize: '1.33em' }}> Contributed in the design of IT infrastructure from cabling to software in office buildings. </p>

          </Grid.Column>
          <Grid.Column floated='right' width={6}>
          <div className="ui fluid image">
      <a className="ui left corner label">
        <i className="heart icon"></i>
      </a>
<center>
     <br></br> <Grid.Row>
          <Grid.Column textAlign='center'>
          <TableExamplePadded/>
          <Link
    activeclass="active"
    to="sectionProject"
    spy={true}
    smooth={true}
    offset={-70}
    duration= {700}
>  <Button size='huge'>View Projects</Button></Link><br/>
<Link2 to={routes.REPOSITORY}> 
<br></br>
        <Button size='large'><i className="git icon"></i>
          Github 
        </Button></Link2>
          </Grid.Column>
        </Grid.Row></center>
    </div>
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
    <Segment style={{ padding: '3em 0em' }} vertical>
      <Container text>
        <br id="sectionProject"/>
        {/* pass in variable of projectList*/}
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
    <Segment  style={{ padding: '6em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
        <Grid.Column floated='right' width={6}>
          <div className="ui fluid image">
      <a className="ui left corner label">
        <i className="heart icon"></i>
      </a>
      <Image bordered rounded size='large' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0cBBU9pT9of5p74g4S_8NPoh9-roeotoBevT080yvUmgM4Br' />
    </div>
          </Grid.Column>
          <Grid.Column id='sectionContact'  width={8}>
            <Header as='h3' style={{ fontSize: '40px' }}>
              Contact
            </Header>
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

const Project1Video = () => (
  <Embed id='x4BJbGYPbVA' placeholder='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmgXA_CAgMrddxU8dl6DSmOfW6rOsfq30JEdLuOGxyF_HGZaDLsw' source='youtube' />
)
const TableExamplePadded = () => (
<Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center'>Language/Framework/Tools</Table.HeaderCell>
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

export default FrontPage2

const ProgressExampleIndicating = (props) => (
<div>
   <Progress active progress size='large' color={props.color} percent={props.percent} >
    
  </Progress></div>

)

 

