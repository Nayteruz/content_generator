import {useEffect, useState} from 'react';
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

export const Main = observer(() => {

    const { page } = useStore();

    const [generatedItems, setGeneratedItems] = useState<IItem[]>([]);
    const [isPending, setIsPending] = useState(false);
    const [manualMessage, setManualMessage] = useState('');
    const [tokens, setTokens] = useState<number>(0);

    const messageData = {
        subject: page.promptSubject,
        type: page.promptType,
        purpose: page.promptPurpose,
        property: page.promptProperty
    }

    const message: IMessage[] = getMessage(messageData);

    const extraMessage: IMessage[] = [
        {role: 'system', content: manualMessage}
    ]

    const getContentInfo = async () => {
        setIsPending(true);

        try {
            const messages = manualMessage ? extraMessage : message;
            const responseData = await getContent({messages});
            const responseMessage = responseData?.choices[0]?.message?.content


            setTokens(responseData?.usage?.total_tokens);
            setGeneratedItems(parseResult(responseMessage));
        } catch (e) {
            alert('Ошибка запроса')
        } finally {
            setIsPending(false);
        }

    }

    useEffect(() => {
        setIsPending(false);
    }, [generatedItems]);

    return (
        <div className={s.mainWrapper}>
            <InfoBlock background="#d9edf7" color="#3a87ad" border={2} html>
                {info1}
            </InfoBlock>
            <InfoBlock background="#fcf8e3" color="#c09853" border={2}>
                {info2}
            </InfoBlock>
            <InfoBlock background="#eee" color="#333">
                <p>Вы можете сгенерировать наполнение с помощью нашей новой функции генерации контента
                </p>
                <SiteSubject fieldKey="promptSubject" value={page.promptSubject} addValue={page.setPromptSubject} field={fields['promptSubject']}/>
                <SiteSubject fieldKey="promptType" value={page.promptType} addValue={page.setPromptType} field={fields['promptType']}/>
                <SiteSubject fieldKey="promptPurpose" value={page.promptPurpose} addValue={page.setPromptPurpose} field={fields['promptPurpose']}/>
                <SiteSubject fieldKey="promptProperty" value={page.promptProperty} addValue={page.setPromptProperty} field={fields['promptProperty']}/>

                <hr/>
                {/*<SiteSubject value={manualMessage} addValue={setManualMessage} field={extraConfig}/>*/}
                <button type="button" onClick={getContentInfo}>Отправить информацию</button>
                <hr/>
                <div className={s.answer}>Ответ:  {isPending ? <Loading/> : ''}</div>
                {tokens > 0 && <div>Затрачено токенов: {tokens}</div>}
                <hr/>
                <Menu items={generatedItems} setItems={setGeneratedItems} addPage={() => {}}/>
                <Pages pages={page.pages}/>
            </InfoBlock>
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
