import styled, { css } from "styled-components";
import { ButtonProps } from "../Button";

type VariantTuple = [string, string, string, string, string];
type SizeTuple = [number, number];

type StyleMap<T> = { [k: string]: T };

const styleVariant = (
  normal: string,
  font: string,
  border: string,
  hover: string,
  active: string
) => {
  return css`
    background-color: ${normal};
    color: ${font};
    border: ${border};
    &:hover {
      background-color: ${hover};
    }
    &:active {
      background-color: ${active};
    }
  `;
};

const styleSize = (p: number, fontSize: number) => {
  return css`
    padding: ${p}px ${p * 2}px;
    font-size: ${fontSize}px;
  `;
};

const VARIANT: StyleMap<VariantTuple> = {
  primary: ["#7b529b", "#fff", "none", "#955fb0", "#6d407f"],
  secondary: ["#fff", "#000", "1px solid #ccc", "#eee", "#ddd"],
  danger: ["#ff5252", "#fff", "none", "#e53935", "#c62828"],
  success: ["#4caf50", "#fff", "none", "#43a047", "#2e7d32"]
};

const SIZE: StyleMap<SizeTuple> = {
  sm: [4, 12],
  md: [8, 16],
  lg: [12, 20]
};

export const StyledButton = styled.button<ButtonProps>`
  all: unset;
  user-select: none;
  border: 1px solid;
  border-color: #ccc;
  border-radius: 6px;
  cursor: pointer;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  transition: background-color 0.075s ease;

  ${props => {
    let { variant, size } = props;
    return css`
      ${styleVariant(...VARIANT[variant!])}
      ${styleSize(...SIZE[size!])}
    `;
  }}
`;
