import React from 'react'
import PropTypes from 'prop-types'
import Spinner from 'react-spinkit'
import styled from 'styled-components'
import { Loader, Icon, Label } from 'semantic-ui-react'

import Logo from './components/Logo'
import Text from './components/Text'

const ScreenWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  background:'#ffffff';
  opacity: ${props => props.loading ? 1 : 0};
  visibility: ${props => props.loading ? 'visible' : 'hidden'};
  transition: opacity 0.4s, visibility -0.3s linear 0.5s;
`
const LoadingComponents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const LoaderExampleInlineCentered = () => <Loader active inline='centered' />
const LabelExampleBasic = () => (
  <Label>
    <Icon name='Loading'/>Loading...  
  </Label>
)

const backWhite =  styled.div`
background : #fff;
`

const LoadableData = styled.div`
  display: ${props => props.loading ? 'none' : 'block'};
`

const propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  spinnerColor: PropTypes.string,
  textColor: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  logoSrc: PropTypes.string,
  text: PropTypes.string
}

function LoadingScreen ({
  children,
  bgColor,
  spinnerColor,
  textColor,
  loading,
  logoSrc,
  logoRounded,
  text,
  textStyle
}) {
  return (
    <div>
      <ScreenWrapper
        bgColor={bgColor}
        loading={loading}
      >
        <LoadingComponents>
          {logoSrc &&
            <Logo
              src={logoSrc}
              rounded={logoRounded} />}

          {loading && spinnerColor &&
             <LoaderExampleInlineCentered></LoaderExampleInlineCentered>}

          {text &&
          <div>
            <br></br>
            <LabelExampleBasic/>
              </div>}

        </LoadingComponents>
      </ScreenWrapper>
      <LoadableData loading={loading}>
        {children}
      </LoadableData>
    </div>
  )
}

LoadingScreen.propTypes = propTypes

export default LoadingScreen