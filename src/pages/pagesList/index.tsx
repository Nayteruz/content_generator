import React, {useEffect} from 'react';
import {useStore} from "@/hooks/useStore";
import {Pages} from "@/components/pages";
import {observer} from "mobx-react-lite";
import CounterBlock from "@/components/counterBlock";
import {Button} from "@/components/ui";
import ActionPanel from "@/components/actionPanel";
import AiInfoBlock from "@/components/aiInfoBlock";
import s from './PageList.module.scss';

const PagesList = observer(() => {
    const { page } = useStore();
    const defaultPages = [
        {id: '1', name: 'Главная', content: ''},
        {id: '2', name: 'О нас', content: ''},
        {id: '3', name: 'Контакты', content: ''},
    ]

    useEffect(() => {
        page.setPages(defaultPages)
    }, []);

    return (
        <>
            <ActionPanel title="Генерация разделов с помощью ИИ">
                <CounterBlock />
                <Button size="medium" tag='div' appearance="purple">Сгенерировать с ИИ</Button>
                <Button icon="plus" size="medium" tag='div' appearance="light_blue" color="color-blue">Новая страница</Button>
            </ActionPanel>
            <div className={s.descriptionPage}>
                В этом разделе вы можете создать структуру из страниц сайта и
                добавить информацию для наполнения или создать все с помощью ИИ
            </div>
            <Pages pages={page.pages} />
            <Button className={s.button} icon="plus" tag="div" size="medium" appearance="light_blue" color="color-blue">
                Новая страница
            </Button>
            <AiInfoBlock
                title="Создайте разделы с помощью ИИ"
                subTitle="Ответь подробнее на несколько вопросов и ИИ предложит вам варианты разделов для сайта"
            />
        </>
    );
});

export default PagesList;