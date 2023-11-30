import {ReactNode} from 'react';
import s from './Modal.module.scss';

export type ModalBottomProps = {
  children?: ReactNode;
};

export const ModalBottom = ({ children }: ModalBottomProps) => (
  <div className={s.bottom}>
    {children}
  </div>
);
