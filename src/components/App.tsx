import s from "./App.module.scss"
import { Header } from "./header";
import { Content } from "./content";
import { Footer } from "./footer";
import {InfoBlock} from "./infoBlock";
import {IPage, Pagelist} from "./pages";
import {info1, info2} from "./information";
import {useEffect, useState} from "react";
import {MenuItems} from "./generate";
import {SiteSubject} from "./prompt/Subject/SiteSubject";
import {getContent, IMessage} from "./api";


export const App = () => {

    const [pages, setPages] = useState<IPage[]>([
        {id: 1, title: 'Главная', content: ''},
        {id: 2, title: 'О нас', content: ''},
        {id: 3, title: 'Контакты', content: ''},
    ]);
    const [promptSubject, setPromptSubject] = useState('шашлыки и мангалы');
    const [responseSubject, setResponseSubject] = useState('');

    const messagesSiteSubject: IMessage[] = [
        { role: 'system', content: 'Ты - копирайтер, занимаешься наполнением сайтов. Твоя задача придумать названия для пунктов меню которые будут размещаться в шапке сайта. Ответ предоставь в виде списка через запятую' },
        { role: 'user', content: 'Ответ предоставь в виде списка через запятую без чисел' },
        {role: 'user', content: `Тематика сайта ${promptSubject}. Напиши мне названия пунктов меню сайта через запятую не менее 10 пунктов`}
    ]


    const addItemPage = (page: IPage) => {
        setPages((prev) => {
            return [...prev, page];
        })
    }

    useEffect(() => {
        (async () => {
            const responseDataMessage = await getContent({messages: messagesSiteSubject});
            setResponseSubject(responseDataMessage);
        })()

    }, [promptSubject]);


    return (
        <div className={s.wrap}>
            <Header/>
            <Content>
                <InfoBlock background="#d9edf7" color="#3a87ad" border={2} html>
                    {info1}
                </InfoBlock>
                <InfoBlock background="#fcf8e3" color="#c09853" border={2}>
                    {info2}
                </InfoBlock>
                <InfoBlock background="#eee" color="#333">
                    <p>Вы можете сгенерировать наполнение с помощью нашей новой функции генерации контента</p>
                    <SiteSubject value={promptSubject} addValue={setPromptSubject}/>
                    <MenuItems items={responseSubject} addPage={addItemPage}/>
                    <Pagelist pages={pages}/>
                </InfoBlock>
            </Content>
            <Footer/>
        </div>
    );
};
