import styled from 'styled-components';
import sizeMixin from './utils/baseStyle';

const AppContainer = styled.div`
  ${sizeMixin('inherit', 'inherit')}
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AppContainer;
