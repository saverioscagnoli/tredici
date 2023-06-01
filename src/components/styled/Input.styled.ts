import styled, { css } from "styled-components";

const commonStyles = css`
  appearance: none;
  background-color: #fff;
  margin: 0;
  color: #7b529b;
  width: 1.15rem;
  height: 1.15rem;
  border: 1.5px solid #aaa;
  display: grid;
  place-content: center;
  cursor: pointer;
  &::before {
    content: "";
    width: 12px;
    height: 12px;
    transform: scale(0);
    transition: transform 15ms ease-in-out;
    box-shadow: inset 1rem 1rem #7b529b;
    border-radius: 4px;
  }
  &:checked::before {
    transform: scale(1);
  }
`;

export const StyledInput = styled.input`
  all: unset;
  user-select: none;

  ${props => {
    switch (props.type) {
      case "checkbox":
        return css`
          ${commonStyles};
          border-radius: 4px;
        `;
      case "radio":
        return css`
          ${commonStyles};
          border-radius: 50%;
          &::before {
            border-radius: 50%;
          }
        `;
      default:
        return css`
          border: 1.5px solid #aaa;
          border-radius: 4px;
          padding: 4px 8px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 600;
          transition: box-shadow 75ms ease;
          &:focus {
            outline: "#7b529b";
            box-shadow: 0 0 0 1.5px #7b529b;
          }
        `;
    }
  }}
`;
