import {useParams} from "react-router-dom";
import {useStore} from "@/hooks/useStore";
import {observer} from "mobx-react-lite";
import {IPageItem} from "@/store/model/Pages/types";
import ActionPanel from "@/components/actionPanel";
import {Button, Modal} from "@/components/ui";
import AiInfoBlock from "@/components/aiInfoBlock";
import {useState} from "react";
import GeneratePagesContent from "@/components/generatePagesContent";

export const PageInfo = observer(() => {
    const { id } = useParams();
    const { page } = useStore();
    const [openModal, setOpenModal] = useState<boolean>();

    const pageInfo: IPageItem = page.getPageById(id);
    // const questions = getQuestions(pageInfo.name);

    const onClick = () => {
        setOpenModal(true);
    }

    const onCloseModal = () => {
      setOpenModal(false);
    }


    return (
        <div>
            <ActionPanel backButton="Назад к разделам">
                <Button
                    size="medium"
                    tag="div"
                    icon="message"
                    appearance="light_blue"
                >
                    Добавить комментарий
                </Button>
                <Button
                    size="medium"
                    tag="div"
                    icon="airplane"
                    appearance="green"
                >
                    Отправить в работу
                </Button>
            </ActionPanel>
            <h1>{pageInfo.name}</h1>
            <AiInfoBlock
                onClick={onClick}
                title="Создайте текст с помощью ИИ"
                subTitle="Ответь подробнее на несколько вопросов и ИИ предложит вам варианты разделов для сайта"
            />
            <Modal title="title" show={openModal} onClose={onCloseModal}>
                <GeneratePagesContent onClose={onCloseModal} />
            </Modal>
        </div>
    )
})