import React from 'react';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import withAuthorization from '../Session/withAuthorization';

const AccountPage = () =>
 /* <div>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>*/
  <div>
    <h1>Account Settings</h1>
  </div>

export default withAuthorization(true)(AccountPage);