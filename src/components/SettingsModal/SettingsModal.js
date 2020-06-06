import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { MdExitToApp as LogOutIcon } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  SettingsModalContainer,
  Item,
  UserAvatar,
  materialUIStyle
} from './SettingsModal.style';

const useStyles = makeStyles({
  ...materialUIStyle
});

export default function SettingsModal({
  isSettingsModal,
  userAvatar,
  isBigScreen
}) {
  const classes = useStyles();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setModalIsOpen(open);
  };

  const list = () => (
    <div
      className={clsx(classes.list)}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List className={classes.userAvatar}>
        <ListItem button>
          <UserAvatar>
            <img src={userAvatar} alt='userLogo' />
          </UserAvatar>
          <ListItemText className={classes.listItemText} primary='Username' />
        </ListItem>
      </List>
      <Divider />
      <Link to='/'>
        <List className={classes.logOutItem}>
          <ListItem className={classes.logOutIcon} button>
            <LogOutIcon />
            <span className={classes.logOutIconLabel}>Log out</span>
          </ListItem>
        </List>
      </Link>
    </div>
  );

  return (
    <div>
      {isBigScreen ? (
        <>
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
        </>
      ) : (
        <>
          <Button className={classes.drawerButton} onClick={toggleDrawer(true)}>
            <></>
          </Button>
          <Drawer
            anchor='right'
            open={modalIsOpen}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </>
      )}
    </div>
  );
}
