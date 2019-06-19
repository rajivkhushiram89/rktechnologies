import React from 'react';
import { Button , Segment} from 'semantic-ui-react';

import { auth } from '../../firebase';

import './index.css';



const divStyle = {
  color: 'red',
};

const SignOutButton = () =>(
<div>
<Segment inverted>
      <Button inverted color='red' id="signouthover"
    onClick={auth.doSignOut}>
        Log-out
      </Button>
  </Segment>
  </div>)



export default SignOutButton;
