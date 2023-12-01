import { useEffect } from "react";
import { useStore } from "@/hooks/useStore";
import { IPageItem } from "@/store/model/Pages/types";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const useGetStorePagesInfo = () => {
  const { page } = useStore();
  const { getData, setData } = useLocalStorage();
  const defaultPages: IPageItem[] = [
    { id: "1", name: "Главная", content: "" },
    { id: "2", name: "О нас", content: "" },
    { id: "3", name: "Контакты", content: "" },
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
