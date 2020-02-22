import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';
import colors from '../../constants/colors';

const CardContainer = styled.div`
  ${sizeMixin('45%', '400px')};
  background-color: #ffffff;
  border-radius: 4px;
  overflow-y: auto;
`;

const Header = styled.div`
  ${sizeMixin('92%', '13%')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
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

const Tasks = styled.div`
  ${sizeMixin('100%', '87%')}
  margin-top: 20px;
`;

export { CardContainer, Header, Title, Tasks };
