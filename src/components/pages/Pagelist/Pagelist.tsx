import {Page} from "../Page/Page";
import s from './Pagelist.module.scss'
import { IPage } from "../types/types";

interface PagelistProps {
    pages: IPage[]
}

export const Pagelist = ({pages}: PagelistProps) => {
    return <ul className={s.list}>
        {pages && pages.map((page, index) => <Page page={page} key={page.id}/>)}
    </ul>
}