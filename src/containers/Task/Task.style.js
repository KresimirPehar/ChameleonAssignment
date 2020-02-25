import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';

const InputContainer = styled.div`
  width: 95%;
  display: flex;
  position: relative;
  margin: 10px auto 5px;

  &:hover {
    input {
      background-color: rgba(34, 34, 34, 0.05);
    }

    svg {
      display: block;
    }
  }

  svg {
    ${sizeMixin('25px', '20px')};
    display: none;
    position: absolute;
    right: 5px;
    top: 8px;
    color: grey;
    cursor: pointer;
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  top: 8px;
  margin-left: 4%;
  cursor: pointer;
`;

const Input = styled.input`
  ${sizeMixin('95%', '32px')};
  display: flex;
  border-radius: 4px;
  border: 0;
  padding-right: 25px;
  padding-left: 40px;
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
    background-color: rgba(34, 34, 34, 0.05);
    cursor: text;
  }

  &:active {
    cursor: grab;
  }
`;

export { InputContainer, CheckboxInput, Input };
