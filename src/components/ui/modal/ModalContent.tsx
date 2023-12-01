import { ReactNode } from 'react';
import s from './Modal.module.scss';

export type TModalContentProps = {
  children?: ReactNode;
};

export const ModalContent = ({ children }: TModalContentProps) => <div className={s.content}>{children}</div>;
