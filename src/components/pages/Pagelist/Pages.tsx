import {Page} from "../Page/Page";
import s from './Pagelist.module.scss'
import { IPage } from "../types/types";

interface PageProps {
    pages: IPage[]
}

export const Pages = ({pages}: PageProps) => {
    return <ul className={s.list}>
        {pages && pages.map((page, index) => <Page page={page} key={page.id}/>)}
    </ul>
}