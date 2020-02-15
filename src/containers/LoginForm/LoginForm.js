import React, { useState } from 'react';
import { FontAwesomeIcon as ShowHidePasswordIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/LoginFormLogo.png';
import {
  Input,
  LoginFormContainer,
  LoginLogo,
  OptionsContainer,
  Button,
  PasswordInputContainer
} from './LoginForm.style';

const LoginForm = () => {
  const [isPasswordHide, setIsPasswordHide] = useState(true);

  const showHidePasswordHandler = () =>
    setIsPasswordHide(prevState => !prevState);

  return (
    <LoginFormContainer>
      <LoginLogo src={Logo} alt='logo' />
      <Input type='email' placeholder='E-mail' />
      <PasswordInputContainer>
        <Input
          type={isPasswordHide ? 'password' : 'text'}
          placeholder='Password'
        />
        <ShowHidePasswordIcon
          icon={isPasswordHide ? faEyeSlash : faEye}
          className='eyeIcon'
          onClick={showHidePasswordHandler}
        />
      </PasswordInputContainer>
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
