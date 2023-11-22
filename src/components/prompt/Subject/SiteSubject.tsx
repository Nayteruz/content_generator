import {ChangeEvent, Dispatch, SetStateAction} from "react";
import s from './SiteSubject.module.scss'
import {IField} from "../fields/fields";

interface SubjectProps {
    value: Record<string, string>;
    addValue:  Dispatch<SetStateAction<Record<string, string>>>
    field: IField
}

export const SiteSubject = ({value, addValue, field}: SubjectProps) => {

    const changeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value;

        addValue((prev) => {
            return {
                ...prev,
                [field.name]: val
            }
        })
    }

    return <div className={s.subject}>
        <div>{field.note}</div>
        <textarea cols={30} rows={3} value={value[field.name]} placeholder={field.placeholder} onChange={(e) => changeValue(e)}></textarea>
    </div>
}