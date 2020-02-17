import React from 'react';
import { HeaderContainer, UserAvatar, Logo } from './Header.style';
import Avatar from '../../assets/UserAvatar.png';
import LogoImage from '../../assets/TodoLogo.svg';
import LogoTitle from '../../assets/TodoLogoTitle.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={LogoImage} alt='logoImage' />
        <img src={LogoTitle} alt='title' />
      </Logo>
      <UserAvatar>
        <span>Username</span>
        <img src={Avatar} alt='userAvatar' />
      </UserAvatar>
    </HeaderContainer>
  );
};

export default Header;
