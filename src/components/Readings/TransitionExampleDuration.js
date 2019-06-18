import React, { Component } from 'react'
import {  Grid, Transition } from 'semantic-ui-react'

export class TransitionExampleDuration extends Component {

  state ={ hide: 500, show:4500, visible: false }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

  componentDidMount() {
      this.toggleVisibility();
  }
  render() {
    const { hide, show, visible } = this.state
    return (
        <div>

          <Transition duration={{ hide, show }} visible={visible}>
            {this.props.children}
          </Transition>
      
      </div>
    )
  }
}

