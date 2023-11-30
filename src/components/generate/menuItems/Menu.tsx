import {Dispatch, SetStateAction } from 'react';
import {IItem} from '@/utils/parse';
import s from './MenuItems.module.scss';

interface MenuItemsProps {
    items: IItem[];
    setItems:  Dispatch<SetStateAction<IItem[]>>;
    addPage: (page: IItem) => void;
}

export const Menu = ({items, setItems, addPage}: MenuItemsProps) => {

  const addNewPage = (item: IItem) => {
    addPage(item);
    setItems((prev) => prev.filter((menuItem) => menuItem.id !== item.id));
  };

  if (!items) {
    return null;
  }

  return <ul className={s.list}>
    {items.map((item) => <li key={item.id}>
      <span onClick={() => addNewPage(item)}>{item.name}</span>
    </li>)}
  </ul>;
};