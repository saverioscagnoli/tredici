import styled, { css } from "styled-components";

type Size = "sm" | "md" | "lg";

const SIZE = {
  sm: { w: 40, h: 22, t: 18, r: 16, m: 3 },
  md: { w: 55, h: 31, t: 23, r: 24, m: 3.5 },
  lg: { w: 80, h: 46, t: 34, r: 36, m: 5 }
};

export const StyledSwitchLabel = styled.label<{ size?: Size }>`
  position: relative;
  display: inline-block;
  ${props => {
    let { w, h } = SIZE[props.size ?? "md"];
    return css`
      width: ${w}px;
      height: ${h}px;
    `;
  }}
`;

export const StyledSwitchInput = styled.input<{ customSize?: Size }>`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + span {
    background-color: #7b529b;
  }
  &:checked + span:before {
    ${props => {
      let { t } = SIZE[props.customSize ?? "md"];
      return css`
        -webkit-transform: translateX(${t}px);
        -ms-transform: translateX(${t}px);
        transform: translateX(${t}px);
      `;
    }}
  }
`;

export const StyledSwitchSlider = styled.span<{ customSize?: Size }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 200ms;
  transition: 200ms;
  border-radius: 35px;

  &:before {
    position: absolute;
    content: "";
    ${props => {
      let { r, m } = SIZE[props.customSize ?? "md"];
      return css`
        width: ${r}px;
        height: ${r}px;
        margin: ${m}px;
        border-radius: 35px;
      `;
    }}
    background-color: white;
    -webkit-transition: 100ms ease-in-out;
    transition: 100ms ease-in-out;
    border-radius: 50%;
  }
`;
