import styled, { css } from "styled-components";

const changingStyle = css`
  &:hover {
    background-color: #eee;
  }
  &:active {
    background-color: #ddd;
  }
`;

export const StyledSelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
  user-select: none;
`;

export const StyledSelectHandler = styled.div`
  width: 170px;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid;
  border-color: #ccc;
  border-radius: 4px;
  cursor: pointer;
  ${changingStyle}

  &:hover {
    box-shadow: 0 0 0 1.5px #7b529b;
  }
`;

export const StyledSelectOptionWrapper = styled.ul`
  width: 170px;
  margin-top: 10px;
  padding: 8px;
  position: absolute;
  list-style: none;
  background-color: #fff;
  border: 1px solid;
  border-color: #ccc;
  border-radius: 4px;
  z-index: 1;
  max-height: 200px;
  overflow-y: auto;
  animation: fade-in 200ms;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const StyledSelectOption = styled.li`
  padding: 8px;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  ${changingStyle}
`;
