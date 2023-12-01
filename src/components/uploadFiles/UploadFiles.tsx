import React, { useRef } from 'react';
import {Button, Icon} from "@/components/ui";
import avatar from '@/assets/avatar.png';
import s from './Upload.module.scss';
import {UploadItem} from "./UploadItem";

export const UploadFiles = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className={s.uploadWrapper}>
      <div className={s.uploadHeader}>
        <div className={s.title}>Файлы и фото для раздела</div>
        <div className={s.uploadBtn}>
          <Button size="small" tag="button" appearance="light_blue" color="color-blue" icon="file-up">Загрузить</Button>
          <Button size="small" tag="button"  appearance="light_blue" color="color-blue">Добавить ссылку</Button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleFileChange}
            multiple
          />
        </div>
      </div>
      <div className={s.itemList}>
        <UploadItem name="Elephant 1802.jpg" icon={avatar} type="image"/>
        <UploadItem name="Главная.doc" icon="test" type="doc"/>
        <UploadItem name="Прайс лист.pdf" type="pdf"/>
        <UploadItem name="http://megagroup.ru" type="link"/>
      </div>
      <div className={s.uploadBlock}>
        <div className={s.upload} onClick={handleFileUpload}>
          <Icon size="large" icon="file-folder" />
          <div className={s.right}>
            <div className={s.name}>Загрузить файлы и фото</div>
            <div className={s.text}>Укажите документы с текстом для страницы а также файлы и фото для размещения на этой странице</div>
          </div>
        </div>
        <div className={s.upload} onClick={handleFileUpload}>
          <Icon size="large" icon="it-network" />
          <div className={s.right}>
            <div className={s.name}>Добавить ссылку на материалы</div>
            <div className={s.text}>Ссылки на документы сайты с текстом и материалами для размещения на этой странице</div>
          </div>
        </div>
      </div>
    </div>
  );
};
