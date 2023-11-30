import s from './PageAction.module.scss'
import {ReactNode} from "react";

interface PopupPageActionProps {
    children: ReactNode;
}

export const PopupPageAction = ({children}: PopupPageActionProps) => {
    return (
        <div className={s.wrapper}>
            {children}
        </div>
    );
};