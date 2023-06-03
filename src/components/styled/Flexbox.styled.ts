import styled from "styled-components";
import { FlexboxProps } from "../Flexbox";

export const StyledFlexbox = styled.div<FlexboxProps>`
  width: ${props => props.w || "auto"};
  height: ${props => props.h || "auto"};
  display: flex;
  justify-content: ${props => (props.horizontal ? "center" : "flex-start")};
  align-items: ${props => (props.vertical ? "center" : "flex-start")};
`;
