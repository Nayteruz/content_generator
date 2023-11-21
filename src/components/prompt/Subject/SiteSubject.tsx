import {ChangeEvent, Dispatch, SetStateAction, useState} from "react";
import s from './SiteSubject.module.scss'

interface ValueProps {
    subject: string,
    type: string,
    purpose: string,
    property: string
}

interface SubjectProps {
    value: ValueProps;
    addValue:  Dispatch<SetStateAction<ValueProps>>
    getContentInfo: () => void;
}

export const SiteSubject = ({value, addValue, getContentInfo}: SubjectProps) => {

    const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        const name = e.target.name;

        addValue((prev) => {
            return {
                ...prev,
                [name]: val
            }
        })
    }

    return <div className={s.subject}>
        <div>
            <input type="text" name="subject" value={value.subject} placeholder="Тематика(subject)" onChange={(e) => changeValue(e)}/>
        </div>
        <div>
            <input type="text" name="type" value={value.type} placeholder="Тип сайта(type)" onChange={(e) => changeValue(e)}/>
        </div>
        <div>
            <input type="text" name="purpose" value={value.purpose} placeholder="Цель сайта(purpose)" onChange={(e) => changeValue(e)}/>
        </div>
        <div>
            <input type="text" name="property" value={value.property} placeholder="Вид сайта(property)" onChange={(e) => changeValue(e)}/>
        </div>
        <button role="button" onClick={getContentInfo}>Отправить</button>
    </div>
}