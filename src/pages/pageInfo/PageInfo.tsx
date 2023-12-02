import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { getContent } from '@/api';
import ActionPanel from '@/components/actionPanel';
import AiInfoBlock from '@/components/aiInfoBlock';
import GeneratePagesContent from '@/components/generatePagesContent';
import { Preloader } from '@/components/preloader/Preloader';
import { Button, Modal, Editor } from '@/components/ui';
import { UploadFiles } from '@/components/uploadFiles/UploadFiles';
import { useGetStorePagesInfo } from '@/hooks/useGetStorePagesInfo';
import { useStore } from '@/hooks/useStore';
import { IPageItem } from '@/store/model/Pages/types';
import { getQuestions } from '@/utils/getMessage';
import { parsePageQuestion } from '@/utils/parse';

export const PageInfo = observer(() => {
  const { id } = useParams();
  const { page } = useStore();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState<boolean>();
  const [isPending, setIsPending] = useState(false);

  useGetStorePagesInfo();

  // со стора должно браться, список страниц useGetStorePagesInfo();
  const pageInfo: IPageItem = page.getPageById(id);

  const messageData = {
    subject: page?.promptSubject || '',
    type: page?.promptType || '',
    purpose: page?.promptPurpose || '',
    property: page?.promptProperty || '',
    pageName: pageInfo?.name || '',
  };
  const messages = getQuestions(messageData);
  const [content, setContent] = useState(pageInfo?.content);
  const [editorContent, setEditorContent] = useState(content);

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const onPageSended = () => {
    navigate('/pageList');
    page.setIsSended(id, true);
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
      // eslint-disable-next-line
      console.log('error', e);
    } finally {
      setIsPending(false);
    }
  };

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = event.target.value;

    setContent(newContent);
    setEditorContent(newContent);
  };

  useEffect(() => {
    setContent(pageInfo?.content);
    setEditorContent(pageInfo?.content);
  }, [pageInfo?.content]);

  return (
    <div>
      <ActionPanel backButton="Назад к разделам">
        <Button size="medium" tag="div" icon="airplane" appearance="green" onClick={onPageSended}>
          Отправить в работу
        </Button>
      </ActionPanel>
      <h1>{pageInfo?.name}</h1>
      <div style={{ margin: '0 0 20px' }}>
        <Editor data={editorContent} onChange={(event, editor) => setEditorContent(editor.getData())} />
        <textarea style={{ display: 'none' }} value={content} onChange={onChange} />
      </div>
      <AiInfoBlock
        onClick={getQuestionForPage}
        title="Создайте текст с помощью ИИ"
        subTitle="Ответь подробнее на несколько вопросов и ИИ предложит вам варианты разделов для сайта"
      />
      <UploadFiles />
      <Modal show={openModal} onClose={onCloseModal} style={{ width: '100%' }}>
        <GeneratePagesContent onClose={onCloseModal} />
      </Modal>
      {isPending && <Preloader text="Генерация не займет много времени" />}
    </div>
  );
});
