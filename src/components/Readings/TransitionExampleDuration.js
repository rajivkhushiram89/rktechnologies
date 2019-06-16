import React, { Component } from 'react'
import { Form, Grid, Image, Transition } from 'semantic-ui-react'
import SignInPage from '../SignIn';

export default class TransitionExampleDuration extends Component {
  state = { hide: 500, show:2500, visible: false }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

  componentDidMount() {
      
  }
  render() {
    const { hide, show, visible } = this.state

    return (
        <div>
      <Grid>
        <Grid.Column>
          <Transition duration={{ hide, show }} visible={visible}>
          <center><div><SignInPage/></div></center>
          </Transition>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}
