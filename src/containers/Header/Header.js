import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { HeaderContainer, Elements, UserAvatar, Logo } from './Header.style';
import Avatar from '../../assets/UserAvatar.png';
import LogoImage from '../../assets/TodoLogo.svg';
import LogoTitle from '../../assets/TodoLogoTitle.svg';
import SettingsModal from '../../components/SettingsModal';

const Header = () => {
  const isBigScreen = useMediaQuery('(min-width:751px)');
  const [isSettingsModal, setIsSettingsModal] = useState(false);

  const settingsModalHandler = () =>
    setIsSettingsModal(prevState => !prevState);

  return (
    <HeaderContainer className='header'>
      <Elements>
        <Logo>
          <img src={LogoImage} alt='logoImage' />
          <img src={LogoTitle} alt='title' />
        </Logo>
        <UserAvatar onClick={isBigScreen ? settingsModalHandler : null}>
          <span>Username</span>
          <img src={Avatar} alt='userAvatar' />
          {(isSettingsModal || !isBigScreen) && (
            <SettingsModal
              isSettingsModal={isSettingsModal}
              userAvatar={Avatar}
              isBigScreen={isBigScreen}
            />
          )}
        </UserAvatar>
      </Elements>
    </HeaderContainer>
  );
};

export default Header;
