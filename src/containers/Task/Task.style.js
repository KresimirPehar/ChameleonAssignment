import styled from 'styled-components';
import sizeMixin from '../../utils/mixins';

const InputContainer = styled.div`
  ${sizeMixin('95%', '32px')};
  display: flex;
  position: relative;
  margin: 5px auto;

  svg {
    position: absolute;
    right: 5px;
    top: 22px;
    color: grey;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }
`;

const CheckboxInput = styled.input`
  position: absolute;
  top: 22px;
  margin-left: 4%;
`;

const Input = styled.input`
  ${sizeMixin('95%', '32px')};
  display: flex;
  background-color: rgba(34, 34, 34, 0.05);
  border-radius: 4px;
  margin: 15px auto 0;
  border: 0;
  padding-right: 25px;
  padding-left: 40px;
  color: #222222;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  &:focus {
    outline: 0;
  }
`;

export { InputContainer, CheckboxInput, Input };
