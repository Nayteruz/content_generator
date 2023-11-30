import {ChangeEvent, useEffect, useState} from "react";
import s from './SiteSubject.module.scss'
import {useStore} from "@/hooks/useStore";
import {keys} from "mobx";

interface SubjectProps {
    value: string;
    addValue: (value: string) => void;
    field: Record<string, string>
    fieldKey: string;
}

export const SiteSubject = ({field, fieldKey}: SubjectProps) => {
    const {page} = useStore();

    const [value, setValue] = useState('');

    useEffect(() => {
        if (fieldKey === 'promptSubject') {
            page.setPromptSubject(value);
        }
        if (fieldKey === 'promptType') {
            page.setPromptSubject(value);
        }
        if (fieldKey === 'promptPurpose') {
            page.setPromptSubject(value);
        }
        if (fieldKey === 'promptProperty') {
            page.setPromptSubject(value);
        }
        if (fieldKey === 'promptExtra') {
            page.setPromptExtra(value);
        }
    }, [value]);

    return <div className={s.subject}>
        <div>{field.note}</div>
        <textarea cols={30} rows={3} value={value} placeholder={field.placeholder} onChange={(e) => setValue(e.target.value)}></textarea>
    </div>
}