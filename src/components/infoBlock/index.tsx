import {ReactNode} from "react";
import s from './InfoBlock.module.scss'

interface InfoBlockProps {
    children: ReactNode;
    header?: string;
    background?: string;
    color?: string;
    border?: number;
    html?: boolean;
}

export const InfoBlock = ({children, background, header, color, border = 0, html}: InfoBlockProps) => {
    return <div className={s.block} style={{background, color, borderWidth: border}}>
        {header && <h3 className={s.header}>{header}</h3>}
        {html ? <div dangerouslySetInnerHTML={{__html: children}}/> : children}
    </div>
}