import {ReactNode} from "react";
import logo from '../assets/logo-megagroup-cabinet.png';
import s from './Header.module.scss'

interface HeaderProps {
    children?: ReactNode;
}

export const Header = ({children}: HeaderProps) => {
    return <div className={s.header}>
        <a href="https://cabinet.megagroup.ru/services">
            <img src={logo} alt="Мегагруп – интернет решения"/>
        </a>
        <div className={s.contacts}>
            <span>Техническая поддержка</span>
            <span>8-800-555-2214</span>
        </div>
    </div>
}