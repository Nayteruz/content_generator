import { ChangeEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { getContent } from '@/api';
import ActionPanel from '@/components/actionPanel';
import CounterBlock from '@/components/counterBlock';
import { fields, IMessage } from '@/components/prompt';
import { Button, Textarea } from '@/components/ui';
import { useStore } from '@/hooks/useStore';
import { IGenerate } from '@/pages/generatePages/types';
import { getMessage } from '@/utils/getMessage';
import { parseResult } from '@/utils/parse';
import s from './GeneratePages.module.scss';

const GeneratePages = observer(({ onClose }: IGenerate) => {
  const { page } = useStore();
  const [isPending, setIsPending] = useState(false);
  const messageData = {
    subject: page.promptSubject,
    type: page.promptType,
    purpose: page.promptPurpose,
    property: page.promptProperty,
  };
  const message: IMessage[] = getMessage(messageData);

  const extraMessage: IMessage[] = [{ role: 'system', content: page.promptExtra }];

  const onChangeSubject = (event: ChangeEvent<HTMLTextAreaElement>) => {
    page.setPromptSubject(event.target.value);
  };

  const onChangeType = (event: ChangeEvent<HTMLTextAreaElement>) => {
    page.setPromptType(event.target.value);
  };

  const onChangeProperty = (event: ChangeEvent<HTMLTextAreaElement>) => {
    page.setPromptProperty(event.target.value);
  };

  const onChangePurpose = (event: ChangeEvent<HTMLTextAreaElement>) => {
    page.setPromptPurpose(event.target.value);
  };

  const getContentInfo = async () => {
    setIsPending(true);

    try {
      const messages = page.promptExtra ? extraMessage : message;
      const responseData = await getContent({ messages });
      const responseMessage = responseData?.choices[0]?.message?.content;
      const result = parseResult(responseMessage);

      result.map((item) => page.addPage(item));

      onClose();
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
      // eslint-disable-next-line no-alert
      alert('Ошибка запроса, не могу распарсить ответ');
    } finally {
      setIsPending(false);
    }
  };

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {isPending ? (
        <span className={s.loader} />
      ) : (
        <>
          <ActionPanel title="Генерация разделов с помощью ИИ">
            <CounterBlock />
            <Button size="medium" tag="div" appearance="purple">
              Сгенерировать
            </Button>
            <Button size="medium" tag="div" appearance="gray" color="color-grey">
              Отмена
            </Button>
          </ActionPanel>
          <div className={s.top}>
            <div className={s.description}>Ответьте на вопросы чтобы помочь ИИ сгенерировать качественный контент</div>
          </div>
          <div className={s.content}>
            <Textarea value={page.promptSubject} name={fields.promptSubject.note} onChange={onChangeSubject} />
            <Textarea value={page.promptType} name={fields.promptType.note} onChange={onChangeType} />
            <Textarea value={page.promptPurpose} name={fields.promptPurpose.note} onChange={onChangePurpose} />
            <Textarea value={page.promptProperty} name={fields.promptProperty.note} onChange={onChangeProperty} />
          </div>
          <div className={s.bottom}>
            <CounterBlock />
            <div className={s.bottomButtons}>
              <Button tag="div" size="medium" appearance="purple" onClick={getContentInfo}>
                Сгенерировать
              </Button>
              <Button tag="div" size="medium" appearance="gray" color="color-grey">
                Отмена
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
});

export default GeneratePages;
