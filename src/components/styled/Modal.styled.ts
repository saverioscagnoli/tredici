import styled from "styled-components";
import { ModalProps } from "../Modal";
import { ModalFooterProps } from "../Modal/ModalFooter";
import { ModalHeaderProps } from "../Modal/ModalHeader";

const H_ALIGNMENT = {
  center: "center",
  left: "flex-start",
  right: "flex-end"
};

const V_ALIGNMENT = {
  center: "center",
  top: "flex-start",
  bottom: "flex-end"
};

export const StyledModalWrapper = styled.div<ModalProps>`
  all: unset;
  display: ${props => (props.open ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: ${props => H_ALIGNMENT[props.horizontalAlign ?? "center"]};
  align-items: ${props => V_ALIGNMENT[props.verticalAlign ?? "center"]};
  background-color: rgba(0, 0, 0, 0.4);
`;

export const StyledModalContainer = styled.div`
  overflow: auto;
  max-width: 100%;
  width: 30%;
  max-height: 100%;
  height: auto;
  background-color: #fff;
  border-radius: 6px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  animation: fade-in 200ms ease;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const StyledModalHeader = styled.div<ModalHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px ${props => (props.separator ? 10 : 0)}px 20px;
  font-size: 30px;
  font-weight: bold;
  border-bottom: ${props => (props.separator ? "1px solid #ccc" : "none")};
`;

export const StyledModalBody = styled.div`
  padding: 10px 20px;
  font-weight: 600;
  text-align: left;
`;

export const StyledModalFooter = styled.div<ModalFooterProps>`
  border-top: ${props => (props.separator ? "1px solid #ccc" : "none")};
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
