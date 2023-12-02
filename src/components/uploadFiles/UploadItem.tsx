import React, {useState} from 'react';
import {Button, Icon} from "@/components/ui";
import MoreIcon from "@/assets/more.svg";
import {PopupPageAction} from "@/components/popupPageAction";
import {UploadItemTypes} from "./types";
import s from './Upload.module.scss';

export const UploadItem = ({name, type, comment, icon }:UploadItemTypes) => {
  const [togglePopup, setTogglePopup] = useState(false);
  let image = (
    type === 'doc' || type === 'pdf' || type === 'link' ? (
      <Icon icon={type} size="big" />
    ) : (
      <img src={icon} alt=""/>
    )
  );
  return (
    <div className={s.item}>
      <div className={s.image}>
        {image}
      </div>
      <div className={s.detals}>
        <div className={s.filename}>{name}</div>
        <Button className={s.commentBtn} tag="div" color="color-blue">+ добавить комментарий</Button>
      </div>
      <div className={s.fileActions}>
        <MoreIcon className={s.more} onClick={() => setTogglePopup((prev) => !prev)} />
        {togglePopup && <PopupPageAction>
          <ul className={s.list}>
            <li>
              <Button
                className={s.button}
                tag="div"
                size="small"
                appearance="blue"
              >
                Переименовать
              </Button>
            </li>
            <li>
                <Button
                  className={s.button}
                  tag="div"
                  size="small"
                  appearance="blue"
                >
                  Удалить
                </Button>
            </li>
          </ul>
        </PopupPageAction>}
      </div>
    </div>
  );
};
