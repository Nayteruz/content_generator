import {useParams} from "react-router-dom";
import {useStore} from "@/hooks/useStore";
import {observer} from "mobx-react-lite";
import {IPageItem} from "@/store/model/Pages/types";
import ActionPanel from "@/components/actionPanel";
import {Button, Modal} from "@/components/ui";
import AiInfoBlock from "@/components/aiInfoBlock";
import {useState} from "react";
import GeneratePagesContent from "@/components/generatePagesContent";
import {getQuestions} from "@/utils/getMessage";
import {getContent} from "@/api";
import {parsePageQuestion} from "@/utils/parse";
import {useLocalStorage} from "@/hooks/useLocalStorage";

export const PageInfo = observer(() => {
    const { id } = useParams();
    const { page } = useStore();
    const [openModal, setOpenModal] = useState<boolean>();
    const [isPending, setIsPending] = useState(false);
    const [responseMessage, setResponseMessage] = useState();

    const pageInfo: IPageItem = page.getPageById(id);
    const messages = getQuestions(pageInfo.name);

    const onCloseModal = () => {
      setOpenModal(false);
    }

    const getQuestionForPage = async () => {
        setIsPending(true);

        try {
            const responseData = await getContent({ messages });
            const responseMessage = responseData?.choices[0]?.message?.content;
            const parsedResult = parsePageQuestion(responseMessage);

            page.addQuestionPage(id, parsedResult)
            setOpenModal(true);
        } catch (e) {

        } finally {
            setIsPending(false);
        }
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
                onClick={getQuestionForPage}
                title="Создайте текст с помощью ИИ"
                subTitle="Ответь подробнее на несколько вопросов и ИИ предложит вам варианты разделов для сайта"
            />
            <Modal title="title" show={openModal} onClose={onCloseModal}>
                <GeneratePagesContent resMessage={responseMessage} onClose={onCloseModal} />
            </Modal>
        </div>
    )
})