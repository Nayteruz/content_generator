import React, {ChangeEvent, useEffect, useState} from 'react';
import {InfoBlock} from "@/components/infoBlock";
import {info1, info2} from "@/components/information";
import {fields, IMessage} from "@/components/prompt";
import {SiteSubject} from "@/components/prompt/Subject/SiteSubject";
import {Loading} from "@/components/loading";
import {Menu} from "@/components/generate";
import {IPage, Pages} from "@/components/pages";
import {getContent} from "@/api";
import s from "./Main.module.scss";
import {extraConfig, getMessage} from "@/utils/getMessage";
import {IItem, parseResult} from "@/utils/parse";
import {useStore} from "@/hooks/useStore";
import {observer} from "mobx-react-lite";
import CreationOptions from "@/components/creationOptions";
import ActionPanel from "@/components/actionPanel";
import {Textarea} from "@/components/ui";

export const Main = observer(() => {

    const { page } = useStore();

    const [generatedItems, setGeneratedItems] = useState<IItem[]>([]);
    const [isPending, setIsPending] = useState(false);
    const [tokens, setTokens] = useState<number>(0);

    const messageData = {
        subject: page.promptSubject,
        type: page.promptType,
        purpose: page.promptPurpose,
        property: page.promptProperty
    }

    const onChangeSubject = (event: ChangeEvent<HTMLTextAreaElement>) => {
        page.setPromptSubject(event.target.value)
    }

    const message: IMessage[] = getMessage(messageData);

    const extraMessage: IMessage[] = [
        {role: 'system', content: page.promptExtra}
    ]

    const getContentInfo = async () => {
        setIsPending(true);

        try {
            const messages = page.promptExtra ? extraMessage : message;
            const responseData = await getContent({messages});
            const responseMessage = responseData?.choices[0]?.message?.content

            setTokens(responseData?.usage?.total_tokens);
            setGeneratedItems(parseResult(responseMessage));
        } catch (e) {
            console.log(e);
            alert('Ошибка запроса, не могу распарсить ответ');
        } finally {
            setIsPending(false);
        }

    }

    useEffect(() => {
        setIsPending(false);
    }, [generatedItems]);

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
