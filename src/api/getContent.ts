import { OpenAI } from 'openai';

const apiKey = process.env.APIKEY;

const openai = new OpenAI({
  apiKey, dangerouslyAllowBrowser: true,
});

const apiUrl = 'https://api.openai.com/v1/chat/completions';
const header = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`,
};

export interface IMessage {
    role: 'user' | 'system';
    content: string;
}

interface getContentProps {
    messages: IMessage[]
}

export const getContent = async ({messages}: getContentProps) => {

  // try {
  //     const result = await openai.completions.create({
  //         model: "text-davinci-003",
  //         prompt: messages,
  //         temperature: 0.5,
  //         max_tokens: 4000,
  //     });
  //     // setApiResponse(result.choices[0].text);
  // } catch (e) {
  //     // setApiResponse("Something is going wrong, Please try again.");
  // }


  // const result = await openai.chat.completions.create({
  //     model: "text-davinci-003",
  //     messages: messages,
  //     temperature: 0.5,
  //     max_tokens: 4000,
  // });
  // //
  // console.log(result)


  try {
    const response = await fetch(`${apiUrl}`, {
      method: 'POST',
      headers: header,
      body: JSON.stringify({
        messages,
        model: 'gpt-4',
        temperature: 0.5,
      }),
    });
    const responseData = await response.json();

    return responseData;
  } catch (error) {
    console.error('Произошла ошибка при вызове API GPT:', error);
  }
};