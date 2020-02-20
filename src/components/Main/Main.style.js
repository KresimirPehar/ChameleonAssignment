import styled from 'styled-components';
import colors from '../../constants/colors';
import sizeMixin from '../../utils/mixins';

const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-column: 2/3;
  position: relative;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  width: 50%;

  h1 {
    margin-bottom: 10px;
    color: #222222;
    font-size: 40px;
    font-weight: bolder;
    line-height: 58px;
  }

  h4 {
    margin: 0;
    color: ${colors.accent};
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
  }
`;

const Image = styled.img`
  ${sizeMixin('550px', '509px')};
  position: absolute;
  top: -80px;
  right: 0;
  z-index: 0;
  width: 50%;
`;

const Lists = styled.div`
  position: absolute;
  top: 230px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export { MainContainer, Title, Image, Lists };
