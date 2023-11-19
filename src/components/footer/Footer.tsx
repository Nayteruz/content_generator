import {ReactNode} from "react";
import s from './Footer.module.scss';

interface FooterProps {
    children?: ReactNode;
}

export const Footer = ({children}: FooterProps) => {

    return <div className={s.footer}>{children}</div>
}