import {ReactNode} from "react";
import {Textarea} from "@/components/ui";
import s from './Content.module.scss'

interface ContentProps {
    children?: ReactNode;
}

export const Content = ({children}: ContentProps) => {

    return <div className={s.wrap}>
        <Textarea name="первый" placeholder="Готовый универсальный магазин: создать, купить, разработать, открыть в Мегагрупп"/>
        {children}
    </div>
}
