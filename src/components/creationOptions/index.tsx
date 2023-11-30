import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import GeneratePages from '../../pages/generatePages';
import CounterBlock from '@/components/counterBlock';
import {ICreationOptions} from '@/components/creationOptions/types';
import {Button, Modal} from '@/components/ui';
import s from './CreationOptions.module.scss';

const CreationOptions = ({ title, subtitle, buttonText, ai }: ICreationOptions) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onClick = () => {
    if (ai) {
      setOpenModal(true);
    } else {
      navigate('pageList');
    }
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className={s.createOptions && !ai ? s.createOptions : s.createOptionsAi}>
      <div className={s.title}>{title}</div>
      <div className={s.subTitle}>{subtitle}</div>
      {ai && <CounterBlock />}
      <Button onClick={onClick} tag="div" size="medium" appearance={ai ? 'purple' : 'blue'}>{buttonText}</Button>
      <Modal show={openModal} onClose={onCloseModal} style={{ width: '100%' }}>
        <GeneratePages onClose={onCloseModal}  />
      </Modal>
    </div>
  );
};

export default CreationOptions;