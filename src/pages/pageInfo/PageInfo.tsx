import { useParams } from "react-router-dom";
import { useStore } from "@/hooks/useStore";
import { observer } from "mobx-react-lite";
import { IPageItem } from "@/store/model/Pages/types";
import ActionPanel from "@/components/actionPanel";
import {Button, Modal, Textarea} from "@/components/ui";
import AiInfoBlock from "@/components/aiInfoBlock";
import React, {ChangeEvent, useEffect, useState} from "react";
import GeneratePagesContent from "@/components/generatePagesContent";
import { getQuestions } from "@/utils/getMessage";
import { getContent } from "@/api";
import { parsePageQuestion } from "@/utils/parse";
import { useGetStorePagesInfo } from "@/hooks/useGetStorePagesInfo";

export const PageInfo = observer(() => {
    useGetStorePagesInfo();
    const { id } = useParams();
    const { page } = useStore();
    const [openModal, setOpenModal] = useState<boolean>();
    const [isPending, setIsPending] = useState(false);
    const pageInfo: IPageItem = page.getPageById(id);
    const messages = getQuestions(pageInfo.name);
    const [content, setContent] = useState(pageInfo.content);

    const onCloseModal = () => {
        setOpenModal(false);
    };

    const getQuestionForPage = async () => {
        setIsPending(true);

        try {
            const responseData = await getContent({ messages });
            const responseMessage = responseData?.choices[0]?.message?.content;
            const parsedResult = parsePageQuestion(responseMessage);
            page.addQuestionPage(id, parsedResult);
            setOpenModal(true);
        } catch (e) {
            console.log("error", e);
        } finally {
            setIsPending(false);
        }
    };

    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value)
    }

    useEffect(() => {
        setContent(pageInfo.content)
    }, [pageInfo.content])

    return (
        <div>
            <ActionPanel backButton="Назад к разделам">
                <Button size="medium" tag="div" icon="message" appearance="light_blue" color="color-blue">
                    Добавить комментарий
                </Button>
                <Button size="medium" tag="div" icon="airplane" appearance="green">
                    Отправить в работу
                </Button>
            </ActionPanel>
            <h1>{pageInfo.name}</h1>
            <Textarea formField value={content} onChange={onChange} />
            <AiInfoBlock
                onClick={getQuestionForPage}
                title="Создайте текст с помощью ИИ"
                subTitle="Ответь подробнее на несколько вопросов и ИИ предложит вам варианты разделов для сайта"
            />
            <Modal show={openModal} onClose={onCloseModal} style={{ width: '100%' }}>
                <GeneratePagesContent onClose={onCloseModal}/>
            </Modal>
        </div>
    );
});
