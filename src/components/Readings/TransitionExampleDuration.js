import React, { Component } from 'react'
import { Form, Grid, Image, Transition } from 'semantic-ui-react'

export class TransitionExampleDuration extends Component {

  state ={ hide: 500, show:this.props.show, visible: false }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))

  componentDidMount() {
      this.toggleVisibility();
  }
  render() {
    const { hide, show, visible } = this.state
    return (
        <div>

          <Transition duration={ show } visible={visible}>
            {this.props.children}
          </Transition>
      
      </div>
    )
  }
}


export  class TransitionExampleTransitionExplorer extends Component {
  state = { animation: 'jiggle', duration: 500, visible: true }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  toggleVisibility = () => this.setState(prevState => ({ visible: !prevState.visible }))
  componentDidMount() {
this.toggleVisibility () }

  render() {
    const { animation, duration, visible } = this.state
    return (
          <div>
          <Transition animation={animation} duration={duration} visible={visible}>
          {this.props.children}
          </Transition>
          </div>
    )
  }
}
