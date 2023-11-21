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
import {getContent} from "./api";
import {IMessage, getMessage, promptMenuList, messagesSiteSubject, fields} from "./prompt";
import {Loading} from "./loading";



export const App = () => {

    const [pages, setPages] = useState<IPage[]>([
        {id: 1, title: 'Главная', content: ''},
        {id: 2, title: 'О нас', content: ''},
        {id: 3, title: 'Контакты', content: ''},
    ]);

    const [promptSubject, setPromptSubject] = useState({
        subject: '',
        type: '',
        purpose: '',
        property: ''
    });
    const [responseSubject, setResponseSubject] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [lang, setLang] = useState('ru')



    const addItemPage = (page: IPage) => {
        setPages((prev) => {
            return [...prev, page];
        })
    }

    const message: IMessage[] = [
        {role: 'system', content: `Ты профессиональный копирайтер-маркетолог и консультант по созданию контента для веб-сайта. Сайт разрабатывается по тематике ${promptSubject.subject}, вид сайта ${promptSubject.type}, цель создания сайта ${promptSubject.purpose}, тип сайта ${promptSubject.property}. Твоя задача подготовить рекомендованный список и структуру страниц  для этого сайта.`}
    ]
    const message2: IMessage[] = [
        {role: 'system', content: `You are a professional copywriter-marketer and content creation consultant for a website. The theme of a website is ${promptSubject.subject}. Website type is ${promptSubject.type}. The purpose of the website is ${promptSubject.purpose}. The website will be ${promptSubject.property}. Your task is to prepare a recommended list and structure of pages for this website based on the information about the site. Provide the response in the form of a structured list of pages in Russian.`}
    ]



    const getContentInfo = async () => {
        setIsPending(true);
        // const list = getMessage(promptSubject, promptMenuList);
        const messages = lang === 'ru' ? message : message2;
        const responseDataMessage = await getContent({messages});
        setResponseSubject(responseDataMessage);
    }

    useEffect(() => {
        setIsPending(false);
    }, [responseSubject]);

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
                    <p>Вы можете сгенерировать наполнение с помощью нашей новой функции генерации контента
                        <select value={lang} onChange={(e) => setLang(e.target.value)}>
                            <option value="ru">Русский</option>
                            <option value="en">Английский</option>
                        </select>
                    </p>
                    {fields.map((field) => <SiteSubject key={field.id} value={promptSubject} addValue={setPromptSubject} field={field}/>)}
                    <button type="button" onClick={getContentInfo}>Отправить информацию</button>
                    <hr/>
                    <div className={s.answer}>Ответ:  {isPending ? <Loading/> : responseSubject}</div>
                    <hr/>
                    <MenuItems items={responseSubject} addPage={addItemPage}/>
                    <Pagelist pages={pages}/>
                </InfoBlock>
            </Content>
            <Footer/>
        </div>
    );
};
