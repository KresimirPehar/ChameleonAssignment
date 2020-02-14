import React from 'react';
import Logo from '../../assets/LoginFormLogo.png';

const LoginForm = () => {
  return (
    <div>
      <img src={Logo} alt='logo' />
      <input type='email' placeholder='E-mail' />
      <input type='password' placeholder='Password' />
      <label>
        <input type='checkbox' />
        Remember me
      </label>
      <span>Forgot password?</span>
      <button>Login</button>
    </div>
  );
};

export default LoginForm;
