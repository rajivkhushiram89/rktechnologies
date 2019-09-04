import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from '../src/components/App'
import LoadingScreen from './components/LoadingScreen/index'
import registerServiceWorker from './registerServiceWorker'




class Demo extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    // fake promise
    setTimeout(() =>
      this.setState({
        loading: false
      }), 2000)
  }

  render () {
    const { loading } = this.state

    return (

      <React.Fragment></React.Fragment>
      /* <LoadingScreen </LoadingScreen>
        loading={loading}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc='https://cdn.dribbble.com/users/891352/screenshots/3310131/bobotov_loader_002.gif'
        text='Loading...'
      >     </LoadingScreen> */

    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
