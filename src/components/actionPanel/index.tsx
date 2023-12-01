import React from 'react';
import { IActionPanel } from '@/components/actionPanel/types';
import { Button } from '@/components/ui';
import s from './ActionPanel.module.scss';

const ActionPanel = ({ title, children, backButton }: IActionPanel) => (
  <div className={s.actionPanel}>
    <div className={s.actionPanelLeftSide}>
      <div className={s.actionPanelTitle}>{title}</div>
      {backButton && (
        <Button
          tag="div"
          appearance="gray"
          size="medium"
          color="color-grey"
          icon="left-square"
          onClick={() => window.history.go(-1)}
        >
          {backButton}
        </Button>
      )}
    </div>
    {children && <div className={s.actionPanelRightSide}>{children}</div>}
  </div>
);

export default ActionPanel;
