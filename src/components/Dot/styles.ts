import styled from "styled-components";
import { DotProps } from ".";

export const DotContainer = styled.span<DotProps>`
  display: block;
  width: 10px;
  height: 10px;
  background-color: ${(props) => props.background || 'green'};
  position: absolute;
  border-radius: 50%;
  top: ${(props) => props.horiozntalPosition}px;
  left: ${(props) => props.verticalPosition}px;
`;