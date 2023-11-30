import {Page} from "../Page/Page";
import s from './Pagelist.module.scss'
import {IPageItem} from "@/store/model/Pages/types";


interface PageProps {
    pages: IPageItem[]
}

export const Pages = ({pages}: PageProps) => {
    return <ul className={s.list}>
        {pages && pages.map((page, index) => <Page page={page} key={page.id}/>)}
    </ul>
}