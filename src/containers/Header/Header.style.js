import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1/4;
  z-index: 1;

  @media (max-width: 750px) {
    width: 100vw;
    background-color: #232c33;
  }
`;

const Elements = styled.div`
  ${sizeMixin('100vw', '80px')}
  display: grid;
  grid-template-columns: 15% 1fr 15%;
  background-color: #232c33;

  @media (max-width: 750px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
    width: 90vw;
    margin: 0 auto;
  }
`;

const Logo = styled.div`
  ${sizeMixin('40px', '40px')}
  display: flex;
  grid-column: 2;
  position: relative;
  top: 50%;

  @media (max-width: 750px) {
    top: 0;
  }

  img {
    margin-right: 10px;
  }
`;

const UserAvatar = styled.div`
  display: flex;
  justify-self: end;
  align-items: center;
  grid-column: 2;
  position: relative;
  bottom: 50%;
  cursor: pointer;

  @media (max-width: 750px) {
    right: 0;
    bottom: 0;
  }

  span {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    margin-right: 22px;

    @media (max-width: 750px) {
      display: none;
    }
  }

  img {
    ${sizeMixin('40px', '40px')}
    border-radius: 100%;
  }
`;

export { HeaderContainer, Elements, Logo, UserAvatar };
