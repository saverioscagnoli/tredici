import styled, { css } from "styled-components";
import { ModalProps } from "../Modal";

const ALIGNMENT = {
  base: "-50%, -150%",
  center: "-50%, -50%",
  left: "-150%, -50%",
  right: "50%, -50%"
};

export const StyledModalWrapper = styled.div<ModalProps>`
  all: unset;
  width: 50%;
  height: 25%;
  display: ${({ open }) => (open ? "block" : "none")};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(${({ alignment }) => ALIGNMENT[alignment ?? "base"]});
`;

export const StyledModalContainer = styled.div`
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  border-radius: 0.5rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledModalHeader = styled.div`
  padding: 10px 10px 0 20px;
  font-size: 25px;
  font-weight: 600;
`;

export const StyledModalBody = styled.div`
  padding: 10px 20px;
  font-weight: 600;
  text-align: left;
`;

export const StyledModalFooter = styled.div`
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
