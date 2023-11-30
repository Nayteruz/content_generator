import {IMessage} from "@/components/prompt";


export const getMessage = (props: {subject: string; type: string; purpose: string; property: string;}): IMessage[] => {
    const {subject, type, purpose, property} = props;
    return [
    {role: 'system', content: `You are a professional copywriter-marketer and content creation consultant for a website. The theme of a website is ${subject}. Website type is ${type}. The purpose of the website is ${purpose}. The website will be ${property}. Your task is to prepare a recommended list and structure of pages for this website based on the information about the site. 
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
            Page and subpage names should be in Russian. The first page should always be named "Главная”. There should be no fewer than 15 options.
            `
    }
    ]
}

export const extraConfig = {
    id: '1', placeholder: 'Свой запрос', name: 'extra', note:'Ручной ввод запроса. Заполнять либо 4 верхних, либо только этот.'
}