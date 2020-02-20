import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Logo from '../../assets/LoginFormLogo.png';
import {
  Input,
  EyeIcon,
  Form,
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
      <Form>
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
          <EyeIcon onClick={showHidePasswordHandler}>
            {isPasswordHide ? <IoMdEyeOff /> : <IoMdEye />}
          </EyeIcon>
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
      </Form>
    </LoginFormContainer>
  );
};

export default LoginForm;
