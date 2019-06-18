import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button, Transition, Image, Divider, Grid, Form, Header, Message, Segment } from 'semantic-ui-react';
import { TransitionExampleDuration} from '../Readings/TransitionExampleDuration'

import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import "../../index.css"

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
 
      <TransitionExampleDuration show='3500' children={<center><div  align="center" id="resizeMaxwidt">
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='https://react.semantic-ui.com/logo.png' /> Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <a href='#'>Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
      <Form onSubmit={this.onSubmit}>
        <Input
          value={email}
          onChange={event => this.setState({ email: event.target.value })}
          type="text"
          placeholder="Email Address"
        />
        <Input
          value={password}
          onChange={event => this.setState({ password: event.target.value })}
          type="password"
          placeholder="Password"
        />
        <Button disabled={isInvalid} type="submit">
          Sign In
        </Button>
        <br></br>
        <Button disabled={isInvalid} type="submit">
          Sign In with Facebook
        </Button>
        <Button disabled={isInvalid} type="submit">
          Sign In with Google
        </Button>

        { error && <p>{error.message}</p> }
      </Form>
      </div></center>}/>
    );
  }
}

export default withRouter(SignInPage);

export  {
  SignInForm,
};
