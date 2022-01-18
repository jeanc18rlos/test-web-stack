import React, { forwardRef, ReactNode, useEffect, useRef, useState } from 'react';
import { StyledModal, StyledPopup } from './styled';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useOnClickOutside } from '../../../';

interface ModalProps {
  children: React.ReactNode;
  elementId: string;
  isOpen: boolean;
  animation: any;
  onAnimationComplete: any;
}

const ModalComponent = ({ children, isOpen, animation, onAnimationComplete }: ModalProps, ref: any) => {
  return ref && ref.current ? (
    createPortal(
      <StyledModal>
        {isOpen && (
          <div className="modal">
            <motion.div
              animate={{ opacity: animation ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="modal__backdrop"
              onAnimationComplete={() => onAnimationComplete()}
            >
              {children}
            </motion.div>
          </div>
        )}
      </StyledModal>,
      ref.current
    )
  ) : (
    <div></div>
  );
};

export const Modal = forwardRef(ModalComponent);

export const Popup = ({ children, isOpen, onClose }: { children: ReactNode; isOpen: boolean; onClose: () => void }) => {
  const [state, setState] = useState({ isOpen: false, isAnimating: false });
  const modalRef = useRef(null);
  const contentRef = useRef(null);
  useOnClickOutside(contentRef, () => {
    if (state.isOpen) {
      setState({ isOpen: false, isAnimating: true });
      onClose();
    }
  });
  useEffect(() => {
    if (isOpen) {
      setState({ isOpen: true, isAnimating: true });
    } else {
      setState({ isOpen: false, isAnimating: true });
      onClose();
    }
    return () => {
      setState({ isOpen: false, isAnimating: true });
    };
  }, [isOpen]);
  return (
    <StyledPopup>
      <Modal
        ref={modalRef}
        animation={state.isOpen}
        elementId={'Modal'}
        isOpen={state.isOpen || state.isAnimating}
        onAnimationComplete={() => {
          setState({ ...state, isAnimating: false });
        }}
      >
        <motion.div
          transition={{ duration: 0.5, delay: 0.2 }}
          onAnimationComplete={() => {
            setState({ ...state, isAnimating: false });
          }}
          animate={{
            scale: state.isOpen ? 1 : 0
          }}
          ref={contentRef}
          className="body"
        >
          {children}
        </motion.div>
      </Modal>

      <div ref={modalRef}></div>
    </StyledPopup>
  );
};

