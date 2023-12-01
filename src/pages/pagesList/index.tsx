import React, { useState } from "react";
import { useStore } from "@/hooks/useStore";
import { Pages } from "@/components/pages";
import { observer } from "mobx-react-lite";
import CounterBlock from "@/components/counterBlock";
import { Button, Modal } from "@/components/ui";
import ActionPanel from "@/components/actionPanel";
import AiInfoBlock from "@/components/aiInfoBlock";
import s from "./PageList.module.scss";
import { useNavigate } from "react-router-dom";
import GeneratePages from "../generatePages";
import { useGetStorePagesInfo } from "@/hooks/useGetStorePagesInfo";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { IPageItem } from "@/store/model/Pages/types";

const PagesList = observer(() => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { page } = useStore();
  const { getData, setData } = useLocalStorage();
  useGetStorePagesInfo();

  const onClickAiButton = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(!openModal);
  };

  const onAddPage = () => {
    const pagesList: IPageItem[] = getData("pages");
    const newPage = {
      id: crypto.randomUUID(),
      name: "testpage" + crypto.randomUUID(),
      content: "",
    };
    setData("pages", [...pagesList, newPage]);
    page.addPage(newPage);
    console.log(pagesList);
  };

  return (
    <>
      <ActionPanel title="Генерация разделов с помощью ИИ">
        <CounterBlock />
        <Button
          size="medium"
          tag="div"
          appearance="purple"
          onClick={onClickAiButton}
        >
          Сгенерировать с ИИ
        </Button>
        <Button
          icon="plus"
          size="medium"
          tag="div"
          appearance="light_blue"
          color="color-blue"
        >
          Новая страница
        </Button>
      </ActionPanel>
      <div className={s.descriptionPage}>
        В этом разделе вы можете создать структуру из страниц сайта и добавить
        информацию для наполнения или создать все с помощью ИИ
      </div>
      <Pages pages={page.pages} />
      <Button
        className={s.button}
        icon="plus"
        tag="div"
        size="medium"
        appearance="light_blue"
        color="color-blue"
        onClick={onAddPage}
      >
        Новая страница
      </Button>
      <AiInfoBlock
        title="Создайте разделы с помощью ИИ"
        subTitle="Ответь подробнее на несколько вопросов и ИИ предложит вам варианты разделов для сайта"
      />
      <Modal show={openModal} onClose={onCloseModal} style={{ width: "100%" }}>
        <GeneratePages onClose={onCloseModal} />
      </Modal>
    </>
  );
});

export default PagesList;
