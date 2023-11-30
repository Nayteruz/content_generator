import {Page} from '../Page/Page';
import {IPageItem} from '@/store/model/Pages/types';
import s from './Pagelist.module.scss';


interface PageProps {
    pages: IPageItem[]
}

export const Pages = ({pages}: PageProps) => <ul className={s.list}>
  {pages && pages.map((page, index) => <Page page={page} key={page.id}/>)}
</ul>;