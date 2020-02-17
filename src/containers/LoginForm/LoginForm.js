import React, { useState } from 'react';
import { FontAwesomeIcon as ShowHidePasswordIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LoginFormLogo.png';
import {
  Input,
  LoginFormContainer,
  LoginLogo,
  OptionsContainer,
  Button,
  InputContainer
} from './LoginForm.style';

const LoginForm = () => {
  const [isPasswordHide, setIsPasswordHide] = useState(true);
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const showHidePasswordHandler = () =>
    setIsPasswordHide(prevState => !prevState);

  const emailInputHandler = e => setEmailValue(e.target.value);
  const passwordInputHandler = e => setPasswordValue(e.target.value);

  return (
    <LoginFormContainer>
      <LoginLogo src={Logo} alt='logo' />
      <InputContainer>
        <Input type='email' value={emailValue} onChange={emailInputHandler} />
        <span>E-mail</span>
      </InputContainer>
      <InputContainer>
        <Input
          type={isPasswordHide ? 'password' : 'text'}
          value={passwordValue}
          onChange={passwordInputHandler}
        />
        <span>Password</span>
        <ShowHidePasswordIcon
          icon={isPasswordHide ? faEyeSlash : faEye}
          className='eyeIcon'
          onClick={showHidePasswordHandler}
        />
      </InputContainer>
      <OptionsContainer>
        <label htmlFor='checkbox'>
          <input type='checkbox' id='checkbox' />
          Remember me
        </label>
        <span>Forgot password?</span>
      </OptionsContainer>
      <Link to='todo'>
        <Button>Login</Button>
      </Link>
    </LoginFormContainer>
  );
};

export default LoginForm;
