import React from 'react';
import { Button } from 'semantic-ui-react';

import { auth } from '../../firebase';

import './index.css';



const divStyle = {
  color: 'red',
};

const SignOutButton = () =>
 <Button style={divStyle} id="signouthover"
    basic
    onClick={auth.doSignOut}
  >
    Sign Out
  </Button>


export default SignOutButton;
