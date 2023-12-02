import React, {ChangeEvent, useState} from 'react';
import {useStore} from "@/hooks/useStore";
import {Pages} from "@/components/pages";
import {observer} from "mobx-react-lite";
import CounterBlock from "@/components/counterBlock";
import {Button, Input, Modal} from "@/components/ui";
import ActionPanel from "@/components/actionPanel";
import AiInfoBlock from "@/components/aiInfoBlock";
import { useGetStorePagesInfo } from "@/hooks/useGetStorePagesInfo";
import GeneratePages from "@/components/generatePages";
import s from './PageList.module.scss';

const PagesList = observer(() => {
    useGetStorePagesInfo();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [pageModal, setPageModal] = useState<boolean>(false);
    const [pageName, setPageName] = useState<string>('');
    const { page } = useStore();

    const onClickAiButton = () => {
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(!openModal);
    }

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setPageName(event.target.value);
    }

    const onClosePageModal = () => {
        setPageModal(false);
    }

    const onAddPage = () => {
        const newPage = {
            name: pageName,
            id: crypto.randomUUID(),
            content: "",
        }

        page.addPage(newPage);
        onClosePageModal();
    }

    return (
        <>
            <ActionPanel title="Создание разделов сайта">
                <CounterBlock />
                <Button size="medium" tag='div' appearance="purple" onClick={onClickAiButton}>Сгенерировать с ИИ</Button>
                <Button
                    icon="plus"
                    size="medium"
                    tag='div'
                    appearance="light_blue"
                    color="color-blue"
                    onClick={() => setPageModal(true)}
                >
                    Новая страница
                </Button>
            </ActionPanel>
            <div className={s.descriptionPage}>
                В этом разделе вы можете создать структуру из страниц сайта и
                добавить информацию для наполнения или создать все с помощью ИИ
            </div>
            <Pages pages={page.pages} />
            <Button
                className={s.button}
                icon="plus"
                tag="div"
                size="medium"
                appearance="light_blue"
                color="color-blue"
                onClick={() => setPageModal(true)}
            >
                Новая страница
            </Button>
            <AiInfoBlock
                title="Создайте разделы с помощью ИИ"
                subTitle="Ответь подробнее на несколько вопросов и ИИ предложит вам варианты разделов для сайта"
                onClick={onClickAiButton}
            />
            <Modal show={openModal} onClose={onCloseModal} style={{ width: '100%' }}>
                <GeneratePages onClose={onCloseModal} />
            </Modal>
            <Modal title="Новый раздел" show={pageModal} onClose={onClosePageModal} >
                <div className={s.modalInner}>
                    <Input name="Укажите название раздела" onChange={onChangeInput}/>
                    <div className={s.modalButtons}>
                        <Button tag="div" size="medium" appearance="blue" onClick={onAddPage}>Добавить</Button>
                        <Button
                            tag="div"
                            size="medium"
                            appearance="gray"
                            color="color-grey"
                            onClick={onClosePageModal}
                        >
                            Отмена
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    );
});

export default PagesList;