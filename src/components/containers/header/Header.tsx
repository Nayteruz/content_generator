import {ReactNode} from "react";
import { Button } from "@/components/ui";
import logo from '../../../assets/logo-megagroup.png';
import avatar from '../../../assets/avatar.png';
import s from './Header.module.scss'

interface HeaderProps {
    children?: ReactNode;
}

export const Header = ({children}: HeaderProps) => {
    return <div className={s.header}>
        <a className={s.logo} href="https://cabinet.megagroup.ru/services">
            <img src={logo} alt="Мегагруп – интернет решения"/>
        </a>
        <Button appearance="black" size="small" tag="button">Контент</Button>
        <div className={s.right}>
            <div className={s.profile}>
                <a href="">
                    <img src={avatar} alt=""/>
                    <span className={s.button}></span>
                </a>
            </div>
        </div>
    </div>
}
