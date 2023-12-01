import {IMessage} from "@/components/prompt";


export const getMessage = (props: {subject: string; type: string; purpose: string; property: string;}): IMessage[] => {
    const {subject, type, purpose, property} = props;
    return [
    {role: 'system',
        content: `You are a professional copywriter-marketer and content creation consultant for a website. The theme of a website is ${subject}. Website type is ${type}. The purpose of the website is ${purpose}. The website will be ${property}. Your task is to prepare a recommended list and structure of pages for this website based on the information about the site. 
    Provide the result in the form of a list of pages and subpages, formatted as a json as shown below: {
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
    Page and subpage names should be in Russian. In the list, the following page names should always be present: “Главная”, “Контакты”, “Вопрос-ответ”
    The first page should always be named "Главная” and should not contain subpages. The last page should always be named "Контакты” and should not contain subpages. Consider the context when creating the "О нас" or "Обо мне" or "О компании" page. If the website represents an individual, use the title "Обо мне". If the website represents a company or institution, you can name the page "О нас" or "О компании". There should be no fewer than 15 options.`
    }
    ]
}

export const getQuestions = (pageName: string): IMessage[] => {
    return [
        {
          role: 'system',
          content: `You are a professional copywriter-marketer and content creation consultant for a website. 
          The website is being created by a web studio, and its purpose is to promote products/services, attract visitors' attention, 
          and increase the number of inquiries received. The theme of a website is THEME. 
          Website type is TYPE. The purpose of the website is PURPOSE. The website will be PROPERTY. 
          Your task is to prepare a list of questions (no fewer than 8 and no more than 10) for writing content on the ${pageName} page of this website. 
          The questions should be formulated in a way that users can provide answers, and these answers will help you in the next step to create the highest quality, unique, and relevant text for the page. It is recommended to include examples in the questions to make it easier for the user to understand what to write in their response. 
          Provide the result in the form of a list of questions, formatted as a json as shown below: {
              "list": [
                {
                  "name":"вопрос 1",
                },
                {
                  "name":"вопрос 2",
                },
                {
                  "name":"вопрос 3"
                }
              ]
          } 
          The list of questions should be in Russian.
          The website owner, who needs to address the tasks this website is meant to solve, will be answering the questions. Therefore, through these questions, you should gather maximum information from the website owner that will assist them in promoting their business through the website.` }
    ]
}

export const getAnswerForQuestions = (allAnswers: string): IMessage[] => {
    return [
        {
            role: 'system',
            content: `You are a professional copywriter-marketer and content creation consultant for a website. 
            The theme of a website is subject. Website type is type. 
            The purpose of the website is purpose. The website will be property. 
            Your task is to write a unique, high-quality, persuasive text for the Page name page of the website. 
            Below is a list of questions and their corresponding answers from the website owner. 
            Use them to personalize the text and enhance its quality and uniqueness. 
            ${allAnswers}
            The narrative style should inspire trust and encourage visitors to submit inquiries on the website. The text on the page should assist the owner in promoting their business online. Be sure to follow the text structure, including a Unique Selling Proposition (USP), headings that separate logical paragraphs, and consider using bulleted or numbered lists where appropriate. The length of the text should be no less than 1700 and no more than 2000 characters. The text should not exceed 30% redundancy, and wateriness should not exceed 15%. Тhe language of text is Russian`
        }
    ]
}

export const extraConfig = {
    id: '1', placeholder: 'Свой запрос', name: 'extra', note:'Ручной ввод запроса. Заполнять либо 4 верхних, либо только этот.'
}