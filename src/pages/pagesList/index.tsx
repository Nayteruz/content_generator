import React, {useEffect, useState} from 'react';
import {useStore} from "@/hooks/useStore";
import {Pages} from "@/components/pages";
import {observer} from "mobx-react-lite";
import CounterBlock from "@/components/counterBlock";
import {Button, Input, Modal} from "@/components/ui";
import ActionPanel from "@/components/actionPanel";
import AiInfoBlock from "@/components/aiInfoBlock";
import s from './PageList.module.scss';
import {useNavigate} from "react-router-dom";
import GeneratePages from "../generatePages";
import {set} from "mobx";
import {isEmptyObj} from "openai/core";

const PagesList = observer(() => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [pageModal, setPageModal] = useState<boolean>(false);
    const { page } = useStore();
    const defaultPages = [
        {id: '1', name: 'Главная', content: ''},
        {id: '2', name: 'О нас', content: ''},
        {id: '3', name: 'Контакты', content: ''},
    ]

    useEffect(() => {
        if (page.pages.length === 0) {
            defaultPages.map((item) => {
                page.addPage(item)
            })
        }
    }, [page.pages.length]);

    const onClickAiButton = () => {
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(!openModal);
    }

    const onAddPage = () => {

    }

    const onCloseModalPage = () => {

    }

    return (
        <>
            <ActionPanel title="Генерация разделов с помощью ИИ">
                <CounterBlock />
                <Button size="medium" tag='div' appearance="purple" onClick={onClickAiButton}>Сгенерировать с ИИ</Button>
                <Button icon="plus" size="medium" tag='div' appearance="light_blue" color="color-blue">Новая страница</Button>
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
            />
            <Modal show={openModal} onClose={onCloseModal} style={{ width: '100%' }}>
                <GeneratePages onClose={onCloseModal}  />
            </Modal>
            <Modal title="Новый раздел" show={pageModal} onClose={onCloseModalPage} >
                <Input name="Укажите название раздела"   />
            </Modal>
        </>
    );
});

export default PagesList;