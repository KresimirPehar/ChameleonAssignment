import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 2/3;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  position: relative;
  top: -60px;
  z-index: 0;
`;

export { MainContainer, Title, Image };
