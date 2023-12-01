import { CSSProperties, MouseEvent, ReactNode, useRef } from 'react';
import { ModalBottom } from './ModalBottom';
import { ModalContent } from './ModalContent';
import s from './Modal.module.scss';

export type TModalProps = {
  title?: string;
  show: boolean;
  onClose: () => void;
  children?: ReactNode;
  style?: CSSProperties;
};

export const Modal = ({ title, show, onClose, children, style }: TModalProps) => {
  const modalRef = useRef<HTMLDivElement>();

  const onClickBackdrop = (event: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === event.target) {
      onClose();
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div role="presentation" className={s.modal} ref={modalRef} onClick={onClickBackdrop}>
      <div className={s.modal_inner} style={style}>
        {title && <div className={s.title}>{title}</div>}
        <button type="button" className={s.close} onClick={onClose}>
          &nbsp;
        </button>
        {children}
      </div>
    </div>
  );
};

Modal.Content = ModalContent;
Modal.Bottom = ModalBottom;
