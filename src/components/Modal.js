import React from "react";
import styled from "styled-components";

const Modal = ({ children, state, setState, title }) => {
  return (
    <>
      {state && (
        <Overlay>
          <ModalContainer className="modal-container">
            <ModalHeader>
              <h3 className="modal-title">{title}</h3>
            </ModalHeader>

            <CloseButton
              className="modal-close-button"
              onClick={() => setState(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </CloseButton>
            {children}
          </ModalContainer>
        </Overlay>
      )}
    </>
  );
};

export default Modal;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  min-height: 200px;
  background: var(--header-words);
  position: relative;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 2px groove var(--words-color);

  h3 {
    margin-left: 1rem;
    font-weight: 500;
    font-size: 2.8rem;
    color: var(--main-color);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  cursor: pointer;
  border: none;
  width: 50px;
  height: 50px;
  background: none;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: var(--main-color);

  &:hover {
    background: var(--third-color);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
