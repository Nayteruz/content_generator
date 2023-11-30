import s from './Page.module.scss'
import {Link} from 'react-router-dom';
import {useState} from "react";
import {IPageItem} from "@/store/model/Pages/types";

interface IPageProps {
    page: IPageItem
}

export const Page = ({page}: IPageProps) => {

    const [value, setValue] = useState(page.name);

    return <li className={s.item}>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
        <Link to={"/page"}>Сформировать страницу</Link>
    </li>
}