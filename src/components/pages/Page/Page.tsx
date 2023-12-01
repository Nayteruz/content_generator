import React, {useState} from "react";
import {IPageItem} from "@/store/model/Pages/types";
import {useNavigate} from "react-router-dom";
import MoreIcon from '@/assets/more.svg';
import {PopupPageAction} from "@/components/popupPageAction";
import {Button, Icon} from "@/components/ui";
import s from './Page.module.scss'

interface IPageProps {
    page: IPageItem
}

export const Page = ({page}: IPageProps) => {
    const [value, setValue] = useState(page.name);
    const [editPage, setEditPage] = useState(false);
    const [togglePopup, setTogglePopup] = useState(false);
    const navigate = useNavigate();
    const [isHoveredIcon, setIsHoveredIcon] = useState(false);
    const [isHoveredItem, setIsHoveredItem] = useState(false);

    const goToPageInfo = () => {
        navigate(`/page/${page.id}`);
    };

    return <li className={s.item} onMouseEnter={() => setIsHoveredItem(true)} onMouseLeave={() => setIsHoveredItem(false)}>
        {editPage ? (
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text"/>
        ) : (
            <>
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
                    <div className={s.nameText}>{value}</div>
                    {page.isAi && <div className={s.labelAI}>Созданно ИИ</div>}
                </div>
                {isHoveredItem && (
                  <div className={s.actionsBtn}>
                      {page.content && (
                          <Button
                              tag="div"
                              size="small"
                              appearance="green"
                              icon="airplane"
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
                            <li><Button className={s.button} tag="div" size="small" appearance="blue">Отправить в работу</Button></li>
                            <li>
                                <Button
                                    className={s.button}
                                    tag="div"
                                    size="small"
                                    appearance="blue"
                                    onClick={goToPageInfo}
                                >
                                    Наполнение
                                </Button>
                            </li>
                            <li><Button className={s.button}  tag="div" size="small" appearance="blue">Переименовать</Button></li>
                            <li><Button className={s.button}  tag="div" size="small" appearance="blue">Выше по списку</Button></li>
                            <li><Button className={s.button}  tag="div" size="small" appearance="blue">Ниже по списку</Button></li>
                            <li><Button className={s.button}  tag="div" size="small" appearance="blue">Удалить</Button></li>
                        </ul>
                    </PopupPageAction>}
                </div>
            </>

        )}
    </li>
}
