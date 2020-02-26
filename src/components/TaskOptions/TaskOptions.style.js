import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';

const TaskOptionsContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  background-color: #ffffff;
  z-index: 1;
  padding-top: 10px;
  -webkit-box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 35px -8px rgba(0, 0, 0, 0.75);
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: rgba(34, 34, 34, 0.05);
  }

  input {
    ${sizeMixin('100%', '100%')};
    position: absolute;
    left: 0;
    opacity: 0;
    cursor: pointer;
  }

  svg {
    display: block;
    position: relative;
    top: unset;
    right: unset;
    margin-right: 8px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
  }
`;

export { TaskOptionsContainer, Item };
