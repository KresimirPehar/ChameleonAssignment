import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';
import colors from '../../constants/colors';

const TasksContainer = styled.div`
  ${sizeMixin('45%', '400px')};
  background-color: #ffffff;
  border-radius: 4px;
`;

const Header = styled.div`
  ${sizeMixin('90%', '30px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding-bottom: 5px;
  border-bottom: 1px solid #000000;
  border-bottom-color: ${colors.accent};

  svg {
    ${sizeMixin('24px', '24px')}
    color: ${colors.accent};
    cursor: pointer;
  }
`;

const Title = styled.div`
  color: #222222;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

export { TasksContainer, Header, Title };
