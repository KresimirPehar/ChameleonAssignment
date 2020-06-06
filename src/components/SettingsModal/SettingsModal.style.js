import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';
import colors from '../../constants/colors';

const materialUIStyle = {
  list: {
    width: 250,
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  userAvatar: {
    justifySelf: 'center',
    flexGrow: 1
  },
  listItemText: {
    marginLeft: '10px'
  },
  drawerButton: {
    position: 'absolute',
    height: '50px',
    top: 0,
    left: 0,
    backgrounColor: 'red'
  },
  logOutIcon: {
    color: 'black',
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px'
  },
  logOutIconLabel: {
    marginLeft: '5px',
    color: 'black',
    fontSize: '18px'
  }
};

const SettingsModalContainer = styled.div`
  @media (max-width: 750px) {
    position: relative;
  }
`;

const UserAvatar = styled.div`
  display: none;
  @media (max-width: 750px) {
    display: block;
    display: flex;
    justify-content: space-between;
  }

  img {
    ${sizeMixin('40px', '40px')}
    border-radius: 100%;
  }
`;

const Item = styled.div`
  ${sizeMixin('240px', '64px')};
  display: flex;
  align-items: center;
  background-color: #ffffff;
  position: absolute;
  top: 50px;
  right: -20px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.75);

  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    width: 100vw;
    position: relative;
    top: -18px;
    right: unset;
    border-top: 1px solid #ccc;
    box-shadow: none;
  }

  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }

  svg {
    ${sizeMixin('20px', '20px')};
    color: ${colors.accent};
    margin-left: 20px;

    @media (max-width: 750px) {
      position: relative;
      left: -20px;
    }
  }

  span {
    color: #222222;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    margin-left: 10px;

    @media (max-width: 750px) {
      position: relative;
      left: -20px;
      display: block;
      text-decoration: none;
    }
  }
`;

export { SettingsModalContainer, UserAvatar, Item, materialUIStyle };
