import styled from 'styled-components';

const TodoPageContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 1fr 15%;

  @media (max-width: 750px) {
    display: block;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;

export default TodoPageContainer;
