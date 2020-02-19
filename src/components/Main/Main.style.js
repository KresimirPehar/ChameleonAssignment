import styled from 'styled-components';
import colors from '../../constants/colors';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 2/3;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 65px;

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
  position: relative;
  top: -60px;
  z-index: 0;
`;

export { MainContainer, Title, Image };
