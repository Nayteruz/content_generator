import React, {useState} from "react";
import {IPageItem} from "@/store/model/Pages/types";
import {useNavigate} from "react-router-dom";
import MoreIcon from '@/assets/more.svg';
import {PopupPageAction} from "@/components/popupPageAction";
import {Button, Icon} from "@/components/ui";
import s from './Page.module.scss'
import {useStore} from "@/hooks/useStore";
import {observer} from "mobx-react-lite";

interface IPageProps {
    page: IPageItem;
}

export const Page = observer(({page}: IPageProps) => {
    const { page: modelPage } = useStore();
    const [togglePopup, setTogglePopup] = useState(false);
    const navigate = useNavigate();
    const [isHoveredIcon, setIsHoveredIcon] = useState(false);
    const [isHoveredItem, setIsHoveredItem] = useState(false);
    const classNames = [s.item, page.isSended && s.isSended].filter(Boolean).join(' ');
    const goToPageInfo = () => {
        navigate(`/page/${page.id}`);
    };

    return (
        <li className={classNames} onMouseEnter={() => setIsHoveredItem(true)} onMouseLeave={() => setIsHoveredItem(false)}>
            <div className={s.description}>
                {page.description && (
                    <>
                <span onMouseEnter={() => setIsHoveredIcon(true)} onMouseLeave={() => setIsHoveredIcon(false)}>
                  <Icon size="small" icon="information"/>
                </span>
                        {isHoveredIcon && (
                            <div className={s.descriptionText}>{page.description}</div>
                        )}
                    </>
                )}
            </div>
            <div className={s.name}>
                <div className={s.nameText}>{page.name}</div>
                {page.isAi && <div className={s.labelAI}>Созданно ИИ</div>}
            </div>
            {page.isSended ? (
                <div className={s.rightInfoSend}>
                    <Icon size="small" icon="doodle-check" />
                    Отдано в работу
                </div>
            ) : (
                <>
                    {isHoveredItem && (
                        <div className={s.actionsBtn}>
                            {page.content && (
                                <Button
                                    tag="div"
                                    size="small"
                                    appearance="green"
                                    icon="airplane"
                                    onClick={() => modelPage.setIsSended(page.id, true)}
                                >
                                    Отправить в работу
                                </Button>
                            )}
                            <Button
                                tag="div"
                                size="small"
                                appearance="blue"
                                icon="document"
                                onClick={goToPageInfo}
                            >
                                Добавить наполнение
                            </Button>
                        </div>
                    )}
                    <div className={s.pageActions}>
                        <MoreIcon className={s.more} onClick={() => setTogglePopup((prev) => !prev)} />
                        {togglePopup && <PopupPageAction>
                            <ul className={s.list}>
                                <li>
                                    <Button
                                        className={s.button}
                                        tag="div"
                                        size="small"
                                        appearance="blue"
                                    >
                                        Переименовать
                                    </Button>
                                </li>
                                <li>
                                    <Button
                                        className={s.button}
                                        tag="div"
                                        size="small"
                                        appearance="blue"
                                        onClick={() => modelPage.deletePage(page.id)}
                                    >
                                        Удалить
                                    </Button>
                                </li>
                            </ul>
                        </PopupPageAction>}
                    </div>
                </>
            )}
        </li>
    )
});
