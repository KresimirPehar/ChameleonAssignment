import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';
import colors from '../../constants/colors';

const CardContainer = styled.div`
  ${sizeMixin('45%', '400px')};
  background-color: #ffffff;
  border-radius: 4px;

  @media (max-width: 750px) {
    ${sizeMixin('90vw', '450px')};
    margin-bottom: 30px;
  }
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

  button {
    border: none;
    padding: 0;
    height: 24px;
    outline: none;
  }
  `;

const Title = styled.div`
  color: #222222;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
`;

const Tasks = styled.div`
  ${sizeMixin('92%', '87%')}
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export { CardContainer, Header, Title, Tasks };
