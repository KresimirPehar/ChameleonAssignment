import React from 'react';
import { FontAwesomeIcon as LogOutIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Item from './SettingsModal.style';

const SettingsModal = () => {
  return (
    <>
      <Link to='/'>
        <Item>
          <LogOutIcon icon={faSignOutAlt} className='logout' />
          <span>Log out</span>
        </Item>
      </Link>
    </>
  );
};

export default SettingsModal;
