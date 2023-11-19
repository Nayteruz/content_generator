import {useState} from "react";
import {MenuItems} from "../generate";
import {getContent, IMessage} from './getContent'
import {IPage} from "../pages";

interface GptApiProps {
    addPage: (page: IPage) => void;
}

export const GptApi = ({addPage}: GptApiProps) => {

    const [value, setValue] = useState('логистика и грузовые перевозки в городе');
    const [output, setOutput] = useState('');
    const [messages, setMessages] = useState<IMessage[]>([
        { role: 'system', content: 'Ты - копирайтер, занимаешься наполнением сайтов. Твоя задача придумать названия для пунктов меню которые будут размещаться в шапке сайта. Ответ предоставь в виде списка через запятую' },
        { role: 'user', content: 'Ответ предоставь в виде списка через запятую без чисел' },
        {role: 'user', content: `Тематика сайта ${value}. Напиши мне названия пунктов меню сайта через запятую не менее 10 пунктов`}
    ])

    const sendPrompt = async () => {
        // setMessages((prevMessages) => {
        //     return [
        //         ...prevMessages,
        //         {role: 'user', content: `Тематика сайта ${value}. Напиши мне названия пунктов меню сайта`}
        //     ]
        // })
        const responseDataMessage = await getContent({messages});
        setOutput(responseDataMessage);
    }

    return <div>
        <div><MenuItems items={output} addPage={addPage}/></div>
        <input value={value} placeholder="тематика сайта" onChange={(e) => setValue(e.target.value)} type="text"/>
        <button role="button" onClick={sendPrompt}>Отправить</button>
    </div>
}