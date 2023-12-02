import { ReactNode } from 'react';
import s from './Content.module.scss';

interface IContentProps {
  children?: ReactNode;
}

export const Content = ({ children }: IContentProps) => <div className={s.wrap}>{children}</div>;
