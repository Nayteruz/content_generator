import {ReactNode} from 'react';
import s from './Content.module.scss';

interface ContentProps {
    children?: ReactNode;
}

export const Content = ({children}: ContentProps) => <div className={s.wrap}>
  {children}
</div>;
