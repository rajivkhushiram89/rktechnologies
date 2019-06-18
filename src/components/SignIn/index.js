import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Input, Button, Transition, Image, Divider, Grid } from 'semantic-ui-react';
import { TransitionExampleDuration} from '../Readings/TransitionExampleDuration'


import Form from '../Form';
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
        history.push(routes.FRONTPAGE);
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
 
      <TransitionExampleDuration children={<div  align="center" id="resizeMaxwidt">
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
      </div>}/>
    );
  }
}

export default withRouter(SignInPage);

export  {
  SignInForm,
};
