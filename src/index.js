import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import App from '../src/components/App';
import LoadingScreen from './components/LoadingScreen/index'
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

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
          }), 2500)
    }
  
    render () {
      const { loading } = this.state
  
      return (
          <div id="preloading">
        <LoadingScreen
          loading={loading}
          bgColor='#f1f1f1'
          spinnerColor='#9ee5f8'
          textColor='#676767'
          logoSrc='https://cdn.dribbble.com/users/891352/screenshots/3310131/bobotov_loader_002.gif'
          text='Loading...'
        >
          <App/>
        </LoadingScreen>
        </div>
      )
    }
  }
ReactDOM.render(<Demo />, document.getElementById('root'));

registerServiceWorker();
