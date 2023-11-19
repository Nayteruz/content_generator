import s from './Page.module.scss'
import {IPage} from "../types/types";

interface IPageProps {
    page: IPage
}

export const Page = ({page}: IPageProps) => {

    return <li className={s.item}>
        <input value={page.title} type="text"/>
        <button>сгенерировать наполнение</button>
        <button>Отдать в работу</button>
    </li>
}