import React from 'react';
import { MdExitToApp as LogOutIcon } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Item from './SettingsModal.style';

const SettingsModal = () => {
  return (
    <>
      <Link to='/'>
        <Item>
          <LogOutIcon />
          <span>Log out</span>
        </Item>
      </Link>
    </>
  );
};

export default SettingsModal;
