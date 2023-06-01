import styled from "styled-components";

export const ModalWrapper = styled.div<{ open: boolean }>`
  all: unset;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ open }) => (open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  z-index: 9999;
`;

export const ModalContent = styled.div<{ open: boolean }>`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
`;
