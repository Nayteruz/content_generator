import {ReactNode} from 'react';
import s from './PageAction.module.scss';

interface PopupPageActionProps {
    children: ReactNode;
}

export const PopupPageAction = ({children}: PopupPageActionProps) => (
  <div className={s.wrapper}>
    {children}
  </div>
);