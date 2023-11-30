import { IMessage } from '@/components/prompt';

export const getMessage = (props: { subject: string; type: string; purpose: string; property: string }): IMessage[] => {
  const { subject, type, purpose, property } = props;

  return [
    {
      role: 'system',
      content: `You are a professional copywriter-marketer and content creation consultant for a website. 
    The theme of a website is ${subject}. Website type is ${type}. The purpose of the website is ${purpose}. 
    The website will be ${property}. 
    Your task is to prepare a recommended list and structure of pages for this website based on the information about the site. 
            Provide the result in the form of a list of pages and subpages, formatted as a json as shown below:
            {
              "list": [
                {
                  "name":"страница 1",
                  "sublist":[
                    {"name":"под страница 1.1"},
                        {"name":"под страница 1.2"}
                  ]
                },
                {
                  "name":"страница 2",
                  "sublist":[
                    {"name":"под страница 2.1"},
                        {"name":"под страница 2.2"}
                  ]
                },
                {
                  "name":"страница 3"
                }
              ]
            }
    Page and subpage names should be in Russian. The first page should always be named "Главная”. 
    There should be no fewer than 15 options.`,
    },
  ];
};

export const getQuestions = (pageName: string) => ({
  role: 'system',
  content: `You are a professional copywriter-marketer and content creation consultant for a website. The website is being created by a web studio, and its purpose is to promote products/services, attract visitors' attention, and increase the number of inquiries received. The theme of a website is THEME. Website type is TYPE. The purpose of the website is PURPOSE. The website will be PROPERTY. Your task is to prepare a list of questions (no fewer than 8 and no more than 10) for writing content on the ${pageName} page of this website. The questions should be formulated in a way that users can provide answers, and these answers will help you in the next step to create the highest quality, unique, and relevant text for the page. It is recommended to include examples in the questions to make it easier for the user to understand what to write in their response. Present the result in the form of a bulleted list of questions in Russian.
    The website owner, who needs to address the tasks this website is meant to solve, will be answering the questions. Therefore, through these questions, you should gather maximum information from the website owner that will assist them in promoting their business through the website.`,
});

export const extraConfig = {
  id: '1',
  placeholder: 'Свой запрос',
  name: 'extra',
  note: 'Ручной ввод запроса. Заполнять либо 4 верхних, либо только этот.',
};
