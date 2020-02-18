import styled from 'styled-components';
import sizeMixin from '../../utils/baseStyle';

const HeaderContainer = styled.div`
  background-color: #232c33;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Logo = styled.div`
  ${sizeMixin('40px', '40px')}
  display: flex;

  img {
    margin-right: 10px;
  }
`;

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  span {
    color: #ffffff;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    margin-right: 20px;
  }

  img {
    ${sizeMixin('40px', '40px')}
    border-radius: 100%;
  }
`;

export { HeaderContainer, Logo, UserAvatar };
