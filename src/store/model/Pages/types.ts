export interface IGenerateItem {
    content: string;
    answer: string;
}

export interface IPageItem {
    name: string;
    id?: string;
    content?: string;
    questions?: IQuestions[];
    answer?: IAnswer[];
    description?: string;
    isAi?: boolean;
    isSended?: boolean;
    generatedContent?: IGenerateItem[];
}

export interface IQuestions {
    question: string;
}

export interface IAnswer {
    answer: string;
}

export interface IQuiz {
    question: string;
    answer: string;
}

export interface IPageListPrompt {
    subject?: string;
    type?: string;
    purpose?: string;
    property?: string;
    extra?: string;
}

export interface IPages {

    pages: IPageItem[];
    pageListPrompt: IPageListPrompt;
    promptSubject: string;
    promptType: string;
    promptPurpose: string;
    promptProperty: string;
    promptExtra: string;
    generationCount: number;

    setPages: (pages: IPageItem[] | null) => void;
    addPage: (page: IPageItem) => void;
    deletePage: (pageId: string) => void;
    setPageListPrompt: (prompt: IPageListPrompt) => void;
    setPromptSubject: (value: string) => void;
    setPromptType: (value: string) => void;
    setPromptPurpose: (value: string) => void;
    setPromptProperty: (value: string) => void;
    setPromptExtra: (value: string) => void;
    setGenerationCount: (value: number) => void;
}
