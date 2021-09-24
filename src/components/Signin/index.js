import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'


const SignIn = () => {
  return (
    <div>
      <header>
        <h1>We now have Auth!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(SignIn);