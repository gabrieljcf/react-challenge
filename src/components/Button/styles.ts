import styled from "styled-components";
import { ButtonType } from './index'

type BtnLargeProps = {
  buttonType?: ButtonType
}

const backgroundMapping = {
  success: 'green',
  alert: 'yellow',
  danger: 'red'
}

const colorMapping = {
  success: '#FFF',
  alert: '#333',
  danger: '#FFF'
}

export const BtnLarge = styled.button<BtnLargeProps>`
  background: none;
  border: none;
  background: ${(props) => props.buttonType ? backgroundMapping[props.buttonType] : backgroundMapping['success']};
  height: 2.5rem;
  width: 10rem;
  border-radius: 0.5rem;
  margin-top: 1.25rem;
  padding: 1.25rem;
  color: ${(props) => props.buttonType ? colorMapping[props.buttonType] : colorMapping['success']};
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  line-height: 0rem;
  cursor: pointer;
  margin-left: 1rem;
`;