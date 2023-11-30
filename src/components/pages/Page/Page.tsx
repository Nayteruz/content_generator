import s from './Page.module.scss'
import React, {useState} from "react";
import {IPageItem} from "@/store/model/Pages/types";
import MoreIcon from '@/assets/more.svg';
import {PopupPageAction} from "@/components/popupPageAction";
import {Button} from "@/components/ui";

interface IPageProps {
    page: IPageItem
}

export const Page = ({page}: IPageProps) => {
    const [value, setValue] = useState(page.name);
    const [editPage, setEditPage] = useState(false);
    const [togglePopup, setTogglePopup] = useState(false);

    return <li className={s.item}>
        {editPage ? (
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
        ) : (
            <>
                <div>{value}</div>
                <div className={s.pageActions}>
                    <MoreIcon className={s.more} onClick={() => setTogglePopup((prev) => !prev)} />
                    {togglePopup && <PopupPageAction>
                        <ul className={s.list}>
                            <li><Button className={s.button} tag="div" size="small" appearance="blue">Отправить в работу</Button></li>
                            <li><Button className={s.button}  tag="div" size="small" appearance="blue">Наполнение</Button></li>
                            <li><Button className={s.button}  tag="div" size="small" appearance="blue">Переименовать</Button></li>
                            <li><Button className={s.button}  tag="div" size="small" appearance="blue">Выше по списку</Button></li>
                            <li><Button className={s.button}  tag="div" size="small" appearance="blue">Ниже по списку</Button></li>
                            <li><Button className={s.button}  tag="div" size="small" appearance="blue">Удалить</Button></li>
                        </ul>
                    </PopupPageAction>}
                </div>
            </>

        )}
    </li>
}