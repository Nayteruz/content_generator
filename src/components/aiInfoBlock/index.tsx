import React from 'react';
import CounterBlock from "@/components/counterBlock";
import s from './AiInfoBlock.module.scss';
import {IAiBlockTypes} from "@/components/aiInfoBlock/types";
import {Button} from "@/components/ui";

const AiInfoBlock = ({ title, subTitle, onClick }: IAiBlockTypes) => {
    return (
        <div className={s.block}>
            <div className={s.blockLeftSide}>
                <div className={s.blockImage}>
                    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.5521 7.29163H11.4334C10.3165 7.29146 9.2443 7.73008 8.44778 8.51297C7.65125 9.29586 7.19417 10.3603 7.17505 11.477V23.5958C7.17505 24.7252 7.62369 25.8083 8.42229 26.6069C9.22088 27.4055 10.304 27.8541 11.4334 27.8541H23.5521C24.6815 27.8541 25.7646 27.4055 26.5632 26.6069C27.3618 25.8083 27.8105 24.7252 27.8105 23.5958V11.477C27.7913 10.3603 27.3343 9.29586 26.5377 8.51297C25.7412 7.73008 24.669 7.29146 23.5521 7.29163ZM22.6188 20.65C22.5998 21.2186 22.3585 21.7571 21.9467 22.1498C21.535 22.5424 20.9856 22.7579 20.4167 22.75H14.2771C13.7008 22.75 13.1481 22.521 12.7406 22.1135C12.3331 21.706 12.1042 21.1533 12.1042 20.577V14.4083C12.1042 13.832 12.3331 13.2793 12.7406 12.8718C13.1481 12.4643 13.7008 12.2354 14.2771 12.2354H20.4167C20.993 12.2354 21.5457 12.4643 21.9532 12.8718C22.3607 13.2793 22.5896 13.832 22.5896 14.4083L22.6188 20.65Z" fill="#7239EA"/>
                        <path opacity="0.3" d="M4.03966 15.6187H10.6751V13.3583H4.03966C3.74185 13.3583 3.45623 13.4766 3.24564 13.6872C3.03505 13.8978 2.91675 14.1834 2.91675 14.4812C2.91672 14.7804 3.03456 15.0675 3.24474 15.2804C3.45492 15.4933 3.74052 15.6149 4.03966 15.6187Z" fill="#7239EA"/>
                        <path opacity="0.3" d="M15.6189 10.2083V4.03954C15.6151 3.74039 15.4935 3.4548 15.2806 3.24462C15.0677 3.03444 14.7806 2.9166 14.4814 2.91663C14.3327 2.91661 14.1855 2.94613 14.0483 3.00348C13.9111 3.06082 13.7867 3.14484 13.6822 3.25066C13.5777 3.35648 13.4953 3.482 13.4397 3.61992C13.3842 3.75785 13.3566 3.90544 13.3585 4.05413V10.2083H15.6189Z" fill="#7239EA"/>
                        <path opacity="0.3" d="M21.6272 10.2083V4.03954C21.6272 3.74173 21.5089 3.45611 21.2983 3.24552C21.0877 3.03493 20.8021 2.91663 20.5043 2.91663C20.2064 2.91663 19.9208 3.03493 19.7102 3.24552C19.4997 3.45611 19.3813 3.74173 19.3813 4.03954V10.2083H21.6272Z" fill="#7239EA"/>
                        <path opacity="0.3" d="M24.7043 15.6187H30.9606C31.2597 15.6149 31.5453 15.4933 31.7555 15.2804C31.9657 15.0675 32.0835 14.7804 32.0835 14.4812C32.0835 14.1834 31.9652 13.8978 31.7546 13.6872C31.544 13.4766 31.2584 13.3583 30.9606 13.3583H24.7043V15.6187Z" fill="#7239EA"/>
                        <path opacity="0.3" d="M30.9606 19.3812H24.7043V21.6271H30.9606C31.2584 21.6271 31.544 21.5088 31.7546 21.2982C31.9652 21.0876 32.0835 20.802 32.0835 20.5041C32.0835 20.2063 31.9652 19.9207 31.7546 19.7101C31.544 19.4995 31.2584 19.3812 30.9606 19.3812Z" fill="#7239EA"/>
                        <path opacity="0.3" d="M10.6751 19.3812H4.03966C3.74185 19.3812 3.45623 19.4995 3.24564 19.7101C3.03505 19.9207 2.91675 20.2063 2.91675 20.5041C2.91675 20.802 3.03505 21.0876 3.24564 21.2982C3.45623 21.5088 3.74185 21.6271 4.03966 21.6271H10.6751V19.3812Z" fill="#7239EA"/>
                        <path opacity="0.3" d="M19.3813 24.9083V30.9604C19.3813 31.2582 19.4997 31.5438 19.7102 31.7544C19.9208 31.965 20.2064 32.0833 20.5043 32.0833C20.8021 32.0833 21.0877 31.965 21.2983 31.7544C21.5089 31.5438 21.6272 31.2582 21.6272 30.9604V24.9083H19.3813Z" fill="#7239EA"/>
                        <path opacity="0.3" d="M13.3584 24.9083V30.9604C13.3584 31.2582 13.4767 31.5438 13.6873 31.7544C13.8979 31.965 14.1835 32.0833 14.4813 32.0833C14.7805 32.0833 15.0676 31.9655 15.2805 31.7553C15.4934 31.5452 15.615 31.2596 15.6188 30.9604V24.9083H13.3584Z" fill="#7239EA"/>
                    </svg>
                </div>
                <div className={s.blockTextWrapper}>
                    <div className={s.blockTitle}>{title}</div>
                    <div className={s.blockSubtitle}>{subTitle}</div>
                </div>
            </div>
            <div className={s.blockRightSide}>
                <CounterBlock />
                <Button tag="div" size="small" appearance="purple" onClick={onClick}>Сгенерировать</Button>
            </div>
        </div>
    );
};

export default AiInfoBlock;