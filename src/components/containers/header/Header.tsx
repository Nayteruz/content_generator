import avatar from '../../../assets/avatar.png';
import logo from '../../../assets/logo-megagroup.png';
import { Button } from '@/components/ui';
import s from './Header.module.scss';

export const Header = () => (
  <div className={s.header}>
    <a className={s.logo} href="https://cabinet.megagroup.ru/services">
      <img src={logo} alt="Мегагруп – интернет решения" />
    </a>
    <Button appearance="black" size="small" tag="button">
      Контент
    </Button>
    <div className={s.right}>
      <div className={s.profile}>
        <a href="/">
          <img src={avatar} alt="" />
          <span className={s.button} />
        </a>
      </div>
    </div>
  </div>
);
