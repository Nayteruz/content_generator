import React, { useRef, useState, useEffect } from 'react';
import { IUploadItemTypes } from './types';
import MoreIcon from '@/assets/more.svg';
import { PopupPageAction } from '@/components/popupPageAction';
import { Button, Icon } from '@/components/ui';
import s from './Upload.module.scss';

export const UploadItem = ({ name, type, icon }: IUploadItemTypes) => {
  const [togglePopup, setTogglePopup] = useState(false);
  const itemRef = useRef<HTMLDivElement>();
  const image =
    type === 'doc' || type === 'pdf' || type === 'link' ? <Icon icon={type} size="big" /> : <img src={icon} alt="" />;

  const clickHandler = () => {
    setTogglePopup(!togglePopup);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (itemRef.current && !itemRef.current.contains(event.target as Node)) {
      setTogglePopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={s.item}>
      <div className={s.image}>{image}</div>
      <div className={s.detals}>
        <div className={s.filename}>{name}</div>
        <Button className={s.commentBtn} tag="div" color="color-blue">
          + добавить комментарий
        </Button>
      </div>
      <div className={s.fileActions} ref={itemRef}>
        <MoreIcon className={s.more} onClick={clickHandler} />
        {togglePopup && (
          <PopupPageAction>
            <ul className={s.list}>
              <li>
                <Button className={s.button} tag="div" size="small" appearance="blue">
                  Комментарий
                </Button>
              </li>
              <li>
                <Button className={s.button} tag="div" size="small" appearance="blue">
                  Удалить
                </Button>
              </li>
            </ul>
          </PopupPageAction>
        )}
      </div>
    </div>
  );
};
