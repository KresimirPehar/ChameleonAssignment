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

  @media (max-width: 1200px) {
    top: 20px;
  }

  @media (max-width: 750px) {
    position: relative;
    top: 0;
    width: 90vw;
    margin: 0 auto;
    z-index: 0;
  }

  h1 {
    margin-bottom: 10px;
    color: #222222;
    font-size: 40px;
    font-weight: bolder;
    line-height: 58px;
    z-index: 1;

    @media (max-width: 750px) {
      font-size: 25px;
      margin-bottom: 0;
    }
  }

  h4 {
    margin: 0;
    color: ${colors.accent};
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;

    @media (max-width: 750px) {
      z-index: 1;
      width: 70%;
    }
  }
`;

const Image = styled.img`
  ${sizeMixin('550px', '509px')};
  position: absolute;
  top: -80px;
  right: 0;
  z-index: 0;
  width: 50%;

  @media (max-width: 750px) {
    top: -150px;
    opacity: 0.3;
  }

  @media (max-width: 550px) {
    top: -130px;
    right: -50px;
  }

  @media (max-width: 420px) {
    top: -160px;
    right: -50px;
  }
`;

const Lists = styled.div`
  position: absolute;
  top: 230px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 750px) {
    top: 150px;
    flex-direction: column;
    align-items: center;
  }
`;

export { MainContainer, Title, Image, Lists };
