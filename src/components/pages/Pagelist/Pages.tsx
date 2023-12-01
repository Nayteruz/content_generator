import { Page } from '../Page/Page';
import { IPageItem } from '@/store/model/Pages/types';
import s from './Pagelist.module.scss';

interface IPageProps {
  pages: IPageItem[];
}

export const Pages = ({ pages }: IPageProps) => (
  <ul className={s.list}>{pages && pages.map((page) => <Page page={page} key={page.id} />)}</ul>
);
