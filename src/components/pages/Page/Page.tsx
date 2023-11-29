import s from './Page.module.scss'
import {IPage} from "../types/types";
import {Link} from 'react-router-dom';
import {useState} from "react";

interface IPageProps {
    page: IPage
}

export const Page = ({page}: IPageProps) => {

    const [value, setValue] = useState(page.name);

    return <li className={s.item}>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
        <Link to={"/page"}>Сформировать страницу</Link>
    </li>
}