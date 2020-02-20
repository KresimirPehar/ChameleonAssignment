import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';
import colors from '../../constants/colors';

const Item = styled.div`
  ${sizeMixin('240px', '64px')};
  display: flex;
  align-items: center;
  background-color: #ffffff;
  position: absolute;
  top: 50px;
  right: -20px;
  border-radius: 3px;
  -webkit-box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.75);

  &:hover {
    cursor: pointer;
    background-color: #f1f1f1;
  }

  svg {
    ${sizeMixin('20px', '20px')};
    color: ${colors.accent};
    margin-left: 20px;
  }

  span {
    color: #222222;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    margin-left: 10px;
  }
`;

export default Item;
