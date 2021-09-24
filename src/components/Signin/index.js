import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Container, DashboardBtn, DashboardBtnLink } from './SigninElements';


const SignIn = () => {
  return (
    <div>
      <Container>
        <h1>Welcome!</h1>
          <DashboardBtn> 
            <DashboardBtnLink to="/dashboard"> Go To Your Dashboard </DashboardBtnLink>
          </DashboardBtn>
      </Container>
      <AmplifySignOut />
      
    </div>
  );
}

export default withAuthenticator(SignIn);