import s from './Page.module.scss'
import {useState} from "react";
import {IPageItem} from "@/store/model/Pages/types";

interface IPageProps {
    page: IPageItem
}

export const Page = ({page}: IPageProps) => {
    const [value, setValue] = useState(page.name);
    const [editPage, setEditPage] = useState(false);

    return <li className={s.item}>
        {editPage ? (
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
        ) : (
            <div>{value}</div>
        )}
    </li>
}