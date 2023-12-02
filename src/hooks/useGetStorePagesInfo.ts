import { useEffect } from "react";
import { useStore } from "@/hooks/useStore";
import { IPageItem } from "@/store/model/Pages/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const useGetStorePagesInfo = () => {
  const { page } = useStore();
  const { getData, setData } = useLocalStorage();
  const defaultPages: IPageItem[] = [
    {
      id: "1",
      name: "Главная",
      description: "Главная страница сайта, которая содержит общую информацию о компании, ее услугах/товарах и основных преимуществах. Здесь следует разместить привлекательные изображения и краткий обзор услуг, которые вы предлагаете, чтобы заинтересовать посетителей.",
      content: ""
    },
    {
      id: "2",
      name: "О нас",
      description: "Страница с информацией о вашей компании, ее истории, миссии, ценностях и команде. Это помогает установить доверие и показать вашу уникальность на рынке. Важно подчеркнуть ваш опыт и особенности подхода к работе",
      content: ""
    },
    {
      id: "3",
      name: "Контакты",
      description: "Страница с контактной информацией. Здесь следует указать адрес, телефон, электронную почту, время работы и возможно карту с местоположением. Также можно добавить в форму обратной связи для удобства посетителей.",
      content: ""
    },
  ];

  useEffect(() => {
    const localPages: IPageItem[] = getData("pages");
    const storePages: IPageItem[] = page.pages;

    if (!localPages && !storePages.length) {
      page.setPages(defaultPages);
      setData("pages", defaultPages);
    } else if (localPages && !storePages.length) {
      const listPages: IPageItem[] = getData("pages");
      page.setPages(listPages);
    } else if (!localPages && storePages.length) {
      setData("pages", storePages);
    }
  }, []);
};
