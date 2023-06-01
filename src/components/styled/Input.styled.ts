import styled, { css } from "styled-components";

export const StyledInput = styled.input`
  all: unset;
  user-select: none;
  ${props => {
    switch (props.type) {
      case "checkbox": {
        return css`
          appearance: none;
          background-color: #fff;
          margin: 0;
          color: #7b529b;
          width: 1.15rem;
          height: 1.15rem;
          border: 1.5px solid #aaa;
          border-radius: 4px;
          display: grid;
          place-content: center;
          &::before {
            content: "";
            width: 12px;
            height: 12px;
            transform: scale(0);
            transition: transform 15ms ease-in-out;
            box-shadow: inset 1rem 1rem #7b529b;
            border-radius: 2px;
          }
          &:checked::before {
            transform: scale(1);
          }
        `;
      }

      case "radio": {
        return css`
          appearance: none;
          background-color: #fff;
          margin: 0;
          color: #7b529b;
          width: 1.15rem;
          height: 1.15rem;
          border: 1.5px solid #aaa;
          border-radius: 50%;
          display: grid;
          place-content: center;
          &::before {
            content: "";
            width: 12px;
            height: 12px;
            transform: scale(0);
            transition: transform 15ms ease-in-out;
            box-shadow: inset 1rem 1rem #7b529b;
            border-radius: 50%;
          }
          &:checked::before {
            transform: scale(1);
          }
        `;
      }

      default: {
        return css`
          border: 1.5px solid;
          border-color: #aaa;
          border-radius: 4px;
          padding: 4px 8px;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          font-weight: 600;
          transition: box-shadow 0.075s ease;
          &:focus {
            outline: "#7b529b";
            box-shadow: 0 0 0 1.5px #7b529b;
          }
        `;
      }
    }
  }}
`;
