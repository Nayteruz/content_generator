import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {useStore} from '@/hooks/useStore';
import s from './Counter.module.scss';

const CounterBlock = observer(() => {
  const { page } = useStore();
  const { generationCount } = page;
  const [isHoveredIcon, setIsHoveredIcon] = useState(false);

  return (
    <div className={s.counter}>
      <div className={s.counterImage}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.3">
            <path d="M17.32 22H3.5C3.23478 22 2.98043 21.8946 2.79289 21.7071C2.60536 21.5196 2.5 21.2652 2.5 21V7.18C2.5 5.80618 3.04575 4.48863 4.01719 3.51719C4.98863 2.54575 6.30618 2 7.68 2H17.32C18.0002 2 18.6738 2.13398 19.3023 2.3943C19.9308 2.65462 20.5018 3.03618 20.9828 3.51719C21.4638 3.99819 21.8454 4.56923 22.1057 5.1977C22.366 5.82617 22.5 6.49975 22.5 7.18V16.82C22.5 17.5002 22.366 18.1738 22.1057 18.8023C21.8454 19.4308 21.4638 20.0018 20.9828 20.4828C20.5018 20.9638 19.9308 21.3454 19.3023 21.6057C18.6738 21.866 18.0002 22 17.32 22Z" fill="#7239EA"/>
          </g>
          <path d="M17.26 10.25H7.73999C7.54108 10.25 7.35031 10.171 7.20966 10.0303C7.06901 9.88968 6.98999 9.69891 6.98999 9.5C6.98999 9.30109 7.06901 9.11032 7.20966 8.96967C7.35031 8.82902 7.54108 8.75 7.73999 8.75H17.26C17.4589 8.75 17.6497 8.82902 17.7903 8.96967C17.931 9.11032 18.01 9.30109 18.01 9.5C18.01 9.69891 17.931 9.88968 17.7903 10.0303C17.6497 10.171 17.4589 10.25 17.26 10.25Z" fill="#7239EA"/>
          <path d="M14.09 15.25H7.73999C7.54108 15.25 7.35031 15.171 7.20966 15.0303C7.06901 14.8897 6.98999 14.6989 6.98999 14.5C6.98999 14.3011 7.06901 14.1103 7.20966 13.9697C7.35031 13.829 7.54108 13.75 7.73999 13.75H14.09C14.2889 13.75 14.4797 13.829 14.6203 13.9697C14.761 14.1103 14.84 14.3011 14.84 14.5C14.84 14.6989 14.761 14.8897 14.6203 15.0303C14.4797 15.171 14.2889 15.25 14.09 15.25Z" fill="#7239EA"/>
        </svg>
      </div>
      <div className={s.counterText}>У вас {generationCount} генераций</div>
      <div className={s.counterImage} onMouseEnter={() => setIsHoveredIcon(true)} onMouseLeave={() => setIsHoveredIcon(false)}>
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.3" d="M10.5 18.3333C15.1023 18.3333 18.8333 14.6024 18.8333 9.99999C18.8333 5.39762 15.1023 1.66666 10.5 1.66666C5.89759 1.66666 2.16663 5.39762 2.16663 9.99999C2.16663 14.6024 5.89759 18.3333 10.5 18.3333Z" fill="#3F4254"/>
          <path d="M10.5 11.1667C10.721 11.1667 10.9329 11.0789 11.0892 10.9226C11.2455 10.7663 11.3333 10.5543 11.3333 10.3333V6.45C11.3333 6.22899 11.2455 6.01703 11.0892 5.86075C10.9329 5.70447 10.721 5.61667 10.5 5.61667C10.2789 5.61667 10.067 5.70447 9.9107 5.86075C9.75442 6.01703 9.66663 6.22899 9.66663 6.45V10.3333C9.66663 10.5543 9.75442 10.7663 9.9107 10.9226C10.067 11.0789 10.2789 11.1667 10.5 11.1667Z" fill="#3F4254"/>
          <path d="M10.4999 14.3833C11.0752 14.3833 11.5416 13.917 11.5416 13.3417C11.5416 12.7664 11.0752 12.3 10.4999 12.3C9.92462 12.3 9.45825 12.7664 9.45825 13.3417C9.45825 13.917 9.92462 14.3833 10.4999 14.3833Z" fill="#3F4254"/>
        </svg>
        {isHoveredIcon && (
          <div className={s.counterIconPopup}>
                        В рамках тарифа вам доступно 20 генераций. Генерация равна одному созданию структуры разделов или наполнению одной страницы.
                        Для увеличения количества генераций обратитесь к менеджеру сайта.
          </div>
        )}
      </div>
    </div>
  );
});

export default CounterBlock;