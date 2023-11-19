import {IPage} from "../../pages";
import s from './MenuItems.module.scss'
import {it} from "node:test";
import {useEffect, useState} from "react";

interface MenuItemsProps {
    items: string;
    addPage: (page: IPage) => void;
}

export const MenuItems = ({items, addPage}: MenuItemsProps) => {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        const list = items.trim().split(',').filter((s) => s.length);

        const itemsList: IPage[] = list.reduce((acc: IPage[], current: string): IPage[] => {
            const id = crypto.randomUUID();
            const item: IPage = {id, title: current, content: ''};
            acc.push(item)
            return acc;
        }, [])
        setMenuItems(itemsList);

    }, [items])

    const addNewPage = (item: IPage) => {
        addPage(item);
        setMenuItems((prev) => {
            return [...prev.filter((m) => m.id !== item.id)]
        })
    }

    if (!menuItems.length) {
        return null;
    }

    return <ul className={s.list}>
        {menuItems.map((i) => {
            return <li onClick={() => addNewPage(i)} key={i.id}>{i.title}</li>
        })}
    </ul>
}