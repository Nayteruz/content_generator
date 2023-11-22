const apiKey = process.env.APIKEY;
const apiUrl = 'https://api.openai.com/v1/chat/completions';
const header = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
}

export interface IMessage {
    role: 'user' | 'system';
    content: string;
}

interface getContentProps {
    messages: IMessage[]
}

export const getContent = async ({messages}: getContentProps) => {

    try {
        const response = await fetch(`${apiUrl}`, {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                messages,
                model: "gpt-4",
                temperature: 0.7,
            }),
        });
        const responseData = await response.json();
        return responseData?.choices[0]?.message?.content;
    } catch (error) {
        console.error('Произошла ошибка при вызове API GPT:', error);
    }
}