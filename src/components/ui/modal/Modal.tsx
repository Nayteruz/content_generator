import { ReactNode, useRef, useEffect, MouseEvent, CSSProperties } from 'react';
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
        <button type="button" className={s.close} onClick={onClose} />
        {children}
      </div>
    </div>
  );
};
