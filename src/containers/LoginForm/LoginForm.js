import React from 'react';
import Logo from '../../assets/LoginFormLogo.png';
import {
  Input,
  LoginFormContainer,
  LoginLogo,
  OptionsContainer,
  Button
} from './LoginForm.style';

const LoginForm = () => {
  return (
    <LoginFormContainer>
      <LoginLogo src={Logo} alt='logo' />
      <Input type='email' placeholder='E-mail' />
      <Input type='password' placeholder='Password' />
      <OptionsContainer>
        <label>
          <input type='checkbox' />
          Remember me
        </label>
        <span>Forgot password?</span>
      </OptionsContainer>
      <Button>Login</Button>
    </LoginFormContainer>
  );
};

export default LoginForm;
