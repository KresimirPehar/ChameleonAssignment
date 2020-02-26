import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';
import colors from '../../constants/colors';

const SettingsModalContainer = styled.div`
  @media (max-width: 750px) {
    width: ${props => (props.isSettingsModal ? '100vw' : '0')};
    height: ${props => (props.isSettingsModal ? '100vh' : '0')};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    background-color: #ffffff;
    position: absolute;
    top: 0;
    right: ${props => (props.isSettingsModal ? '-15vw' : '-105vw')};
    transition: 0.5s;
  }
`;

const UserAvatar = styled.div`
  display: none;
  @media (max-width: 750px) {
    display: block;
    position: absolute;
    top: 30px;
    left: 50px;
    display: flex;
  }

  img {
    ${sizeMixin('40px', '40px')}
    border-radius: 100%;
  }

  span {
    display: block;
    position: absolute;
    left: 60px;
    top: 10px;
    color: black;
    font-weight: 500;
    font-size: 16px;
    line-height: 17px;
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

export { SettingsModalContainer, UserAvatar, Item };
