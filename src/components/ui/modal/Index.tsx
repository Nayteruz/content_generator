import {ReactNode, useRef} from 'react';
import { ModalContent } from './ModalContent';
import { ModalBottom } from './ModalBottom';
import s from './Modal.module.scss';

export type ModalProps = {
  title: string;
  show: boolean;
  onClose: () => void;
  children?: ReactNode;
};

export const Modal = ({
   title,
   show,
   onClose,
   children,
 }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>();

  const onClickBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === event.target) onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className={s.modal}
      ref={modalRef}
      onClick={onClickBackdrop}
    >
      <div className={s.modal_inner}>
        <div className={s.title}>{title}</div>
        <button className={s.close} onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
};

Modal.Content = ModalContent;
Modal.Bottom = ModalBottom;
