import s from './MenuItems.module.scss'
import {Dispatch, SetStateAction } from "react";
import {IItem} from "@/utils/parse";

interface MenuItemsProps {
    items: IItem[];
    setItems:  Dispatch<SetStateAction<IItem[]>>;
    addPage: (page: IItem) => void;
}

export const Menu = ({items, setItems, addPage}: MenuItemsProps) => {

    const addNewPage = (item: IItem) => {
        addPage(item);
        setItems((prev) => prev.filter((menuItem) => menuItem.id !== item.id))
    }

    if (!items) {
        return null;
    }

    return <ul className={s.list}>
        {items.map((item) => {
            return <li key={item.id}>
                <span onClick={() => addNewPage(item)}>{item.name}</span>
            </li>
        })}
    </ul>
}