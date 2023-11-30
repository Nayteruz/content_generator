import React from 'react';
import {useNavigate} from "react-router-dom";
import {ICreationOptions} from "@/components/creationOptions/types";
import {Button} from "@/components/ui";
import s from './CreationOptions.module.scss';
import CounterBlock from "@/components/counterBlock";

const CreationOptions = ({ title, subtitle, buttonText, ai }: ICreationOptions) => {
    const navigate = useNavigate();

    const onClick = () => {
        if (ai) {
            navigate('generatePages')
        } else {
            navigate('pageList')
        }
    }

    return (
        <div className={s.createOptions && !ai ? s.createOptions : s.createOptionsAi}>
            <div className={s.title}>{title}</div>
            <div className={s.subTitle}>{subtitle}</div>
            {ai && <CounterBlock />}
            <Button onClick={onClick} tag="div" size="medium" appearance={ai ? "purple" : "blue"}>{buttonText}</Button>
        </div>
    );
};

export default CreationOptions;