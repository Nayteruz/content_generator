import React from 'react';
import {Button, Icon} from "@/components/ui";
import {UploadItemTypes} from "./types";
import s from './Upload.module.scss';

export const UploadItem = ({name, type, comment, icon }:UploadItemTypes) => {
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
    </div>
  );
};
