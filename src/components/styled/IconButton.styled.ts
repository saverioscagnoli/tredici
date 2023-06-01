import styled, { css } from "styled-components";
import { StyledButton } from "./Button.styled";

type VariantTuple = [string, string, string, string, string];
type StyleMap<T> = { [k: string]: T };

const VARIANT: StyleMap<VariantTuple> = {
  primary: ["#7b529b", "#fff", "none", "#955fb0", "#6d407f"],
  secondary: ["#fff", "#000", "1px solid #ccc", "#eee", "#ddd"],
  danger: ["#ff5252", "#fff", "none", "#e53935", "#c62828"],
  success: ["#4caf50", "#fff", "none", "#43a047", "#2e7d32"]
};

const styleVariant = (
  normal: string,
  font: string,
  border: string,
  hover: string,
  active: string
) => css`
  background-color: ${normal};
  border: ${border};
  color: ${font};
  &:hover {
    background-color: ${hover};
  }
  &:active {
    background-color: ${active};
  }
`;

const SIZE = {
  sm: "8px",
  md: "12px",
  lg: "16px"
};

export const StyledIconButton = styled(StyledButton)`
  ${props => css`
    padding: ${SIZE[props.size ?? "md"]};
    ${styleVariant(...VARIANT[props.variant ?? "secondary"])}
  `}
  padding: 12px;
  display: flex;
`;
