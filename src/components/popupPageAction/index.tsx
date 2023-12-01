import { ReactNode } from 'react';
import s from './PageAction.module.scss';

interface IPopupPageActionProps {
  children: ReactNode;
}

export const PopupPageAction = ({ children }: IPopupPageActionProps) => <div className={s.wrapper}>{children}</div>;
