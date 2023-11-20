import {Dispatch, SetStateAction } from "react";
import s from './SiteSubject.module.scss'

interface SubjectProps {
    value: string;
    addValue:  Dispatch<SetStateAction<string>>
    getContentInfo: () => void;
}

export const SiteSubject = ({value, addValue, getContentInfo}: SubjectProps) => {

    return <div className={s.subject}>
        <input value={value} placeholder="тематика сайта" onChange={(e) => addValue(e.target.value)} type="text"/>
        <button role="button" onClick={getContentInfo}>Отправить</button>
    </div>
}