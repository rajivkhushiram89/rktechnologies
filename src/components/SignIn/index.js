import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button, Transition, Image, Container, Grid, Form, Header, Message, Segment } from 'semantic-ui-react';
import { TransitionExampleDuration} from '../Readings/TransitionExampleDuration'
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';


const transitions = ['jiggle', 'flash', 'shake', 'pulse', 'tada', 'bounce', 'glow']



const SignInPage = ({ history }) =>
  <div>
    <SignInForm history={history} />

  </div>

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  animation: transitions[2],
   duration: 1300, visible: true
};

class SignInForm extends Component {
    state = { ...INITIAL_STATE };
  

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.FRONTPAGE2);
      })
      .catch(error => {
        this.setState(() => ({ error }));
      });

    event.preventDefault();
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

 
  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';
      
    return (
      <div style={{ background: '#1b1c1d' }} >
       
      <TransitionExampleDuration show='2000' children={ <center> <div align="center" id="resizeMaxwidt">
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='grey' textAlign='center'>
        <Image color='blue' src='https://react.semantic-ui.com/logo.png' />
      Log-in to your account
      </Header>
      <Form size='large' onSubmit={this.onSubmit}>
        <Segment stacked>

         
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' value={email} onChange={event => this.setState({ email: event.target.value })} type="text" />
          
          
           {/*  value={password}
          onChange={event => this.setState({ password: event.target.value })}
          type="password"
          placeholder="Password"*/}
          <Form.Input
            fluid
            icon='lock'
            value={password}
            onChange={event => this.setState({ password: event.target.value })}
            type="password"
            placeholder="Password"
          />


<div>
<Button   color='teal' disabled={isInvalid} type="submit">
          Sign In
        </Button>
        </div>
        <div> <br>
        </br>        
<Button   className='ui facebook button' >
<i aria-hidden="true" className="facebook icon"></i> with Facebook
        </Button></div>
        <div><br>
        </br>
<Button    className="ui instagram button"><i aria-hidden="true" className="instagram icon"></i> with Instagram
        </Button></div>
        </Segment>

        { error &&   <Button inverted color='red' 
    ><i className="stop circle icon"></i>
        <p>{error.message}</p>
      </Button> }
      
      </Form>  
      <Message>
       <div> New to us? </div><Link to={routes.SIGN_UP}><br></br><Button  inverted  secondary > Register</Button></Link>
      </Message>
    </Grid.Column>
  </Grid>
      </div></center>}/></div>
    );
  }
}

export default withRouter(SignInPage);

export  {
  SignInForm,
};
