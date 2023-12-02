import React, { useRef, useState } from 'react';
import { UploadItem } from './UploadItem';
import image from '@/assets/elep.png';
import { Button, Icon, Modal, Input } from '@/components/ui';
import s from './Upload.module.scss';

export const UploadFiles = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [openModal, setOpenModal] = useState<boolean>();

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = () => {
    // const { files } = event.target;

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onShowModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className={s.uploadWrapper}>
        <div className={s.uploadHeader}>
          <div className={s.title}>Файлы и фото для раздела</div>
          <div className={s.uploadBtn}>
            <Button
              size="small"
              tag="button"
              appearance="light_blue"
              color="color-blue"
              icon="file-up"
              onClick={handleFileUpload}
            >
              Загрузить
            </Button>
            <Button size="small" tag="button" appearance="light_blue" color="color-blue" onClick={onShowModal}>
              Добавить ссылку
            </Button>
            <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleFileChange} multiple />
          </div>
        </div>
        <div className={s.itemList}>
          <UploadItem name="Elephant 1802.jpg" icon={image} type="image" />
          <UploadItem name="Главная.doc" icon="test" type="doc" />
          <UploadItem name="Прайс лист.pdf" type="pdf" />
          <UploadItem name="http://megagroup.ru" type="link" />
        </div>
        <div className={s.uploadBlock}>
          <div role="presentation" className={s.upload} onClick={handleFileUpload}>
            <Icon size="large" icon="file-folder" />
            <div className={s.right}>
              <div className={s.name}>Загрузить файлы и фото</div>
              <div className={s.text}>
                Укажите документы с текстом для страницы а также файлы и фото для размещения на этой странице
              </div>
            </div>
          </div>
          <div role="presentation" className={s.upload} onClick={onShowModal}>
            <Icon size="large" icon="it-network" />
            <div className={s.right}>
              <div className={s.name}>Добавить ссылку на материалы</div>
              <div className={s.text}>
                Ссылки на документы сайты с текстом и материалами для размещения на этой странице
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={openModal} onClose={onCloseModal} title="Добавить ссылку на материалы">
        <div className={s.modalInner}>
          <Input name="Добавите ссылку" />
          <div className={s.modalButtons}>
            <Button tag="div" size="medium" appearance="blue" onClick={onCloseModal}>
              Добавить
            </Button>
            <Button tag="div" size="medium" appearance="gray" color="color-grey" onClick={onCloseModal}>
              Отмена
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
