import { ReactNode } from 'react';
import s from './Footer.module.scss';

interface IFooterProps {
  children?: ReactNode;
}

export const Footer = ({ children }: IFooterProps) => <div className={s.footer}>{children}</div>;
