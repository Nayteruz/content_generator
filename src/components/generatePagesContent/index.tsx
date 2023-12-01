import React, { useState } from "react";
import ActionPanel from "@/components/actionPanel";
import CounterBlock from "@/components/counterBlock";
import { Button, Textarea } from "@/components/ui";
import { observer } from "mobx-react-lite";
import { useStore } from "@/hooks/useStore";
import { getContent } from "@/api";
import { getAnswerForQuestions } from "@/utils/getMessage";
import { useParams } from "react-router-dom";
import { IGenerate } from "@/pages/generatePages/types";
import s from "./GeneratePagesContent.module.scss";
import { IQuestions, IQuiz } from "@/store/model/Pages/types";
import { Preloader } from "@/components/preloader/Preloader";

const GeneratePagesContent = observer(({ onClose }: IGenerate) => {
  const { page } = useStore();
  const { id } = useParams();
  const [isPending, setIsPending] = useState(false);
  const questions = page.getQuestions(id);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(""),
  );

  const getContentInfo = async () => {
    setIsPending(true);
    try {
      const allAnswers: IQuiz[] = questions.map(
        (question: IQuestions, index) => ({
          question: question.question,
          answer: userAnswers[index],
        }),
      );
      const formattedString = allAnswers
        .map(({ question, answer }) => `${question}\n${answer}`)
        .join("\n\n");
      const messages = getAnswerForQuestions(formattedString);
      const responseData = await getContent({ messages });
      const responseMessage = responseData?.choices[0]?.message?.content;

      page.addContentToPage(id, responseMessage);
      onClose();
    } catch (e) {
      alert("Ошибка запроса, не могу распарсить ответ");
    } finally {
      page.setGenerationCount(page.generationCount - 1);
      setIsPending(false);
    }
  };

  const onChangeText = (index: any, answer: any) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = answer;
      return newAnswers;
    });
  };

  return (
    <>
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
        {questions.map((question, index) => {
          return (
              <div key={index}>
                <Textarea
                  value={userAnswers[index]}
                  onChange={(e) => onChangeText(index, e.target.value)}
                  name={question.question}
                />
              </div>
          );
        })}
      </div>
      <div className={s.bottom}>
        <CounterBlock />
        <div className={s.bottomButtons}>
          <Button tag="div" size="medium" appearance="purple" onClick={getContentInfo}>Сгенерировать</Button>
          <Button tag="div" size="medium" appearance="gray" color="color-grey" onClick={onClose}>Отмена</Button>
        </div>
      </div>
      {isPending && <Preloader text="Генерация не займет много времени" />}
    </>
  );
});

export default GeneratePagesContent;
