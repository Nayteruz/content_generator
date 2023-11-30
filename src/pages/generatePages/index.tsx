import React from 'react';
import ActionPanel from "@/components/actionPanel";
import CounterBlock from "@/components/counterBlock";
import {Button, Textarea} from "@/components/ui";
import s from './GeneratePages.module.scss';

const GeneratePages = () => {
    return (
        <>
            <ActionPanel title="Генерация разделов с помощью ИИ">
                <CounterBlock />
                <Button size="medium" tag='div' appearance="purple">Сгенерировать</Button>
                <Button size="medium" tag='div' appearance="gray" color="color-grey">Отмена</Button>
            </ActionPanel>
            <div className={s.top}>
                <div className={s.description}>
                    Ответьте на вопросы чтобы помочь ИИ сгенерировать качественный контент
                </div>
            </div>
            <div className={s.content}>
                <Textarea name="Вопрос первый" />
                <Textarea name="Вопрос второй" />
                <Textarea name="Вопрос третий" />
                <Textarea name="Вопрос четвертый" />
                <Textarea name="Вопрос пятый" />
            </div>
            <div className={s.bottom}>
                <CounterBlock />
                <div className={s.bottomButtons}>
                    <Button tag="div" size="medium" appearance="purple">Сгенерировать</Button>
                    <Button tag="div" size="medium" appearance="gray" color="color-grey">Отмена</Button>
                </div>
            </div>
        </>
    );
};

export default GeneratePages;