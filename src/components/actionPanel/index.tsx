import React from 'react';
import s from './ActionPanel.module.scss';
import {IActionPanel} from "@/components/actionPanel/types";

const ActionPanel = ({ title, children }: IActionPanel) => {
    return (
        <div className={s.actionPanel}>
            <div className={s.actionPanelLeftSide}>
                <div className={s.actionPanelTitle}>{title}</div>
            </div>
            {children && (
                <div className={s.actionPanelRightSide}>{children}</div>
            )}
        </div>
    );
};

export default ActionPanel;