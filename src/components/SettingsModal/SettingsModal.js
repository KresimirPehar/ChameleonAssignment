import React from 'react';
import { MdExitToApp as LogOutIcon } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  SettingsModalContainer,
  UserAvatar,
  Item
} from './SettingsModal.style';

const SettingsModal = ({ isSettingsModal, userAvatar }) => {
  return (
    <SettingsModalContainer isSettingsModal={isSettingsModal}>
      <UserAvatar>
        <img src={userAvatar} alt='userLogo' />
        <span>Username</span>
      </UserAvatar>
      <Link to='/'>
        <Item>
          <LogOutIcon />
          <span>Log out</span>
        </Item>
      </Link>
    </SettingsModalContainer>
  );
};

export default SettingsModal;
