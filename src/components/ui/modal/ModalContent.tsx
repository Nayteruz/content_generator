import {ReactNode} from 'react';
import s from './Modal.module.scss';

export type ModalContentProps = {
  children?: ReactNode;
};

export const ModalContent = ({ children }: ModalContentProps) => (
  <div className={s.content}>
    {children}
  </div>
);
