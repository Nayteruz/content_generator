import React, { ChangeEvent, useEffect, useState } from "react";
import ActionPanel from "@/components/actionPanel";
import CounterBlock from "@/components/counterBlock";
import { Button, Textarea } from "@/components/ui";
import s from "./GeneratePages.module.scss";
import { observer } from "mobx-react-lite";
import { useStore } from "@/hooks/useStore";
import { fields, IMessage } from "@/components/prompt";
import { getContent } from "@/api";
import { IItem, parseResult } from "@/utils/parse";
import { getMessage } from "@/utils/getMessage";
import { useNavigate } from "react-router-dom";
import { IGenerate } from "@/pages/generatePages/types";
import { IPageItem } from "@/store/model/Pages/types";
import { Preloader } from "@/components/preloader/Preloader";

const GeneratePages = observer(({ onClose }: IGenerate) => {
  const { page } = useStore();
  const usenavigate = useNavigate();
  const [generatedItems, setGeneratedItems] = useState<IItem[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [tokens, setTokens] = useState<number>(0);
  const messageData = {
    subject: page.promptSubject,
    type: page.promptType,
    purpose: page.promptPurpose,
    property: page.promptProperty,
  };
  const message: IMessage[] = getMessage(messageData);

  const extraMessage: IMessage[] = [
    { role: "system", content: page.promptExtra },
  ];

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

      setTokens(responseData?.usage?.total_tokens);
      const result = parseResult(responseMessage);

      result.map((item: IPageItem) => {
        page.addUniquePages(item, true);
      });

      onClose();
    } catch (e) {
      console.log(e);
      alert("Ошибка запроса, не могу распарсить ответ");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <>
      {isPending && <Preloader text="Генерация не займет много времени" />}
      <ActionPanel title="Генерация разделов с помощью ИИ">
        <CounterBlock />
        <Button
          size="medium"
          tag="div"
          appearance="purple"
          onClick={getContentInfo}
        >
          Сгенерировать
        </Button>
        <Button
          size="medium"
          tag="div"
          appearance="gray"
          color="color-grey"
          onClick={onClose}
        >
          Отмена
        </Button>
      </ActionPanel>
      <div className={s.top}>
        <div className={s.description}>
          Ответьте на вопросы чтобы помочь ИИ сгенерировать качественный контент
        </div>
      </div>
      <div className={s.content}>
        <Textarea
          value={page.promptSubject}
          name={fields["promptSubject"].note}
          onChange={onChangeSubject}
        />
        <Textarea
          value={page.promptType}
          name={fields["promptType"].note}
          onChange={onChangeType}
        />
        <Textarea
          value={page.promptPurpose}
          name={fields["promptPurpose"].note}
          onChange={onChangePurpose}
        />
        <Textarea
          value={page.promptProperty}
          name={fields["promptProperty"].note}
          onChange={onChangeProperty}
        />
      </div>
      <div className={s.bottom}>
        <CounterBlock />
        <div className={s.bottomButtons}>
          <Button
            tag="div"
            size="medium"
            appearance="purple"
            onClick={getContentInfo}
          >
            Сгенерировать
          </Button>
          <Button tag="div" size="medium" appearance="gray" color="color-grey">
            Отмена
          </Button>
        </div>
      </div>
    </>
  );
});

export default GeneratePages;
