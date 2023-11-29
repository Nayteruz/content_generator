import {useEffect, useState} from 'react';
import {InfoBlock} from "../../components/infoBlock";
import {info1, info2} from "../../components/information";
import {fields, IMessage} from "../../components/prompt";
import {SiteSubject} from "../../components/prompt/Subject/SiteSubject";
import {Loading} from "../../components/loading";
import {Menu} from "../../components/generate";
import {IPage, Pages} from "../../components/pages";
import {getContent} from "../../api";
import s from "./Main.module.scss";
import {extraConfig, getMessage} from "@/utils/getMessage";
import {IItem, parseResult} from "@/utils/parse";

export const Main = () => {

    const [pages, setPages] = useState<IPage[]>([
        {id: '1', name: 'Главная', content: ''},
        {id: '2', name: 'О нас', content: ''},
        {id: '3', name: 'Контакты', content: ''},
    ]);

    const [promptSubject, setPromptSubject] = useState({
        subject: 'Собственное производство полуфабрикатов',
        type: 'интернет-магазин',
        purpose: 'продажа',
        property: 'микробизнес'
    });
    const [generatedItems, setGeneratedItems] = useState<IItem[]>([]);
    const [isPending, setIsPending] = useState(false);
    const [manualMessage, setManualMessage] = useState({extra: ''});
    const [tokens, setTokens] = useState<number>(0);

    const addItemPage = (page: IPage) => {
        setPages((prev) => {
            return [...prev, page];
        })
    }

    const message: IMessage[] = getMessage(promptSubject)

    const extraMessage: IMessage[] = [
        {role: 'system', content: manualMessage.extra}
    ]

    const getContentInfo = async () => {
        setIsPending(true);

        try {
            const messages = manualMessage.extra ? extraMessage : message;
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
        <>
            <InfoBlock background="#d9edf7" color="#3a87ad" border={2} html>
                {info1}
            </InfoBlock>
            <InfoBlock background="#fcf8e3" color="#c09853" border={2}>
                {info2}
            </InfoBlock>
            <InfoBlock background="#eee" color="#333">
                <p>Вы можете сгенерировать наполнение с помощью нашей новой функции генерации контента
                </p>
                {fields.map((field) => <SiteSubject key={field.id} value={promptSubject} addValue={setPromptSubject} field={field}/>)}
                <hr/>
                <SiteSubject value={promptSubject} addValue={setManualMessage} field={extraConfig}/>
                <button type="button" onClick={getContentInfo}>Отправить информацию</button>
                <hr/>
                <div className={s.answer}>Ответ:  {isPending ? <Loading/> : ''}</div>
                {tokens > 0 && <div>Затрачено токенов: {tokens}</div>}
                <hr/>
                <Menu items={generatedItems} setItems={setGeneratedItems} addPage={addItemPage}/>
                <Pages pages={pages}/>
            </InfoBlock>
        </>
    );
};
