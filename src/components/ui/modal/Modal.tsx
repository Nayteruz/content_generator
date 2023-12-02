import {ReactNode, useRef, useEffect} from 'react';
import s from './Modal.module.scss';

export type ModalProps = {
  title?: string;
  show: boolean;
  onClose: () => void;
  children?: ReactNode;
  style?: React.CSSProperties;
};

export const Modal = ({
   title,
   show,
   onClose,
   children,
   style
 }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [show, onClose]);

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
      <div className={s.modal_inner} style={style}>
        {title && <div className={s.title}>{title}</div>}
        <button className={s.close} onClick={onClose}></button>
        {children}
      </div>
    </div>
  );
};
