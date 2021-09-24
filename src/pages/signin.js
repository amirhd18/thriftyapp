import React from 'react'
import { Container, Icon } from '../components/Signin/SigninElements';
import SignIn from '../components/Signin';


const SigninPage = () => {
    return (
        <>
          <Container>
                <Icon to="/">Thrifty</Icon>
          </Container>
          <SignIn />
        </>
    )
}

export default SigninPage;