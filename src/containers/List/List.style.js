import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';

const TasksContainer = styled.div`
  ${sizeMixin('45%', '400px')};
  background-color: #ffffff;
  border-radius: 4px;
`;

const Title = styled.div`
  ${sizeMixin('90%', '30px')};
  margin: 10px auto;
  border-bottom: 1px solid #000000;
  color: #222222;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

export { TasksContainer, Title };
