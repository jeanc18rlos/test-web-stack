import styled from 'styled-components';

export const StyledPopup = styled.div`
  .modal__backdrop {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #Modal {
    z-index: 999;
    position: fixed;
  }
  .body {
    transform: scale(1);
    background: white;
    padding: 16px;
    width: fit-content;
    height: fit-content;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border-radius: 11px;
  }
`;
export const StyledModal = styled.div`
  .modal {
    width: 100%;
    height: 100%;
    z-index: 10;
    .modal__backdrop {
      position: fixed;
      top: 0;
      left: 0;
      content: '';
      background: rgba(23, 23, 23, 0.4);
      width: 100%;
      height: 100%;
      z-index: 99;
      opacity: 0;
    }
  }
`;
