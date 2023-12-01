import { ReactNode } from 'react';
import s from './Modal.module.scss';

export type TModalBottomProps = {
  children?: ReactNode;
};

export const ModalBottom = ({ children }: TModalBottomProps) => <div className={s.bottom}>{children}</div>;
