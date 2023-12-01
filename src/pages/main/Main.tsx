import React from 'react';
import {observer} from "mobx-react-lite";
import CreationOptions from "@/components/creationOptions";
import ActionPanel from "@/components/actionPanel";
import s from "./Main.module.scss";

export const Main = observer(() => {
    return (
        <div className={s.mainWrapper}>
            <ActionPanel title="Контент сайта" />
            <div className={s.mainInner}>
                <CreationOptions
                    title="Создать самостоятельно"
                    subtitle="Добавьте страницы и заполните текстовое наполнение и добавьте изображение"
                    buttonText="Заполнить"
                    ai={false}
                />
                <CreationOptions
                    title="Создать с помощью ИИ"
                    subtitle="Ответьте на вопросы и опишите тематику сайта. ИИ предложит подходящую структуру и список страниц."
                    buttonText="Сгенерировать"
                    ai={true}
                />
            </div>
        </div>
    );
});
