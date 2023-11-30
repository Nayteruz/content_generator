export interface IPageItem {
    name: string;
    id?: string;
    content?: string;
    description?: string;
    isAi?: boolean;
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

    setPages: (pages: IPageItem[] | null) => void;
    addPage: (page: IPageItem) => void;
    deletePage: (pageId: string) => void;
    setPageListPrompt: (prompt: IPageListPrompt) => void;
    setPromptSubject: (value: string) => void;
    setPromptType: (value: string) => void;
    setPromptPurpose: (value: string) => void;
    setPromptProperty: (value: string) => void;
    setPromptExtra: (value: string) => void;
}
