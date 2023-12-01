import { makeAutoObservable } from "mobx";
import {IAnswer, IPageItem, IPageListPrompt, IPages, IQuestions} from "./types";

export class Pages implements IPages {
  pages: IPageItem[] = [];
  promptSubject = "Услуги ландшафтного дизайна: Проектирование, озеленение, сооружение водоемов, сооружение дренажа.";
  promptType = "Информационный";
  promptPurpose = "Реклама, информирование, привлечение новых клиентов";
  promptProperty = "Сайт компании";
  promptExtra = "";

  pageListPrompt: IPageListPrompt = {
    subject: "Собственное производство полуфабрикатов",
    type: "интернет-магазин",
    purpose: "продажа",
    property: "микробизнес",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setPageListPrompt({
    subject = "",
    type = "",
    purpose = "",
    property = "",
  }: IPageListPrompt) {
    if (subject) {
      this.pageListPrompt.subject = subject;
    }
    if (type) {
      this.pageListPrompt.type = type;
    }
    if (purpose) {
      this.pageListPrompt.purpose = purpose;
    }
    if (property) {
      this.pageListPrompt.property = property;
    }
  }

  getPageById(id: number | string) {
    return this.pages.find((page) => page.id === id);
  }

  setPages(pages: IPageItem[] | null) {
    this.pages = pages || [];
  }

  addPage(page: IPageItem) {
    this.pages.push(page);
  }

  deletePage(pageId: string) {
    this.pages = this.pages.filter((page) => page.id !== pageId);
  }

  addUniquePages(page: IPageItem, isAi: boolean = false) {
    const isPageUnique = !this.pages.some(
      (existingPage) => existingPage.name === page.name,
    );

    if (isPageUnique) {
      page.isAi = isAi;
      this.pages.push(page);
    }
  }

  addQuestionPage(id: string, value: IQuestions[]) {
    const pages = this.pages.map((item) => {
      if (item.id === id) {
        item.questions = value;
      }

      return item;
    });
    this.setPages(pages);
  }

  addContentToPage(id: string, value: string) {
    const pages = this.pages.map((item) => {
      if (item.id === id) {
        item.content = value;
      }

      return item;
    });
    this.setPages(pages);
  }

  getQuestions(id: string) {
    const currentPage = this.getPageById(id);
    return currentPage.questions;
  }

  getAnswer(id: string) {
    const currentPage = this.getPageById(id);
    return currentPage.answer;
  }

  setPromptSubject(value: string) {
    this.promptSubject = value;
  }
  setPromptType(value: string) {
    this.promptType = value;
  }
  setPromptPurpose(value: string) {
    this.promptPurpose = value;
  }
  setPromptProperty(value: string) {
    this.promptProperty = value;
  }
  setPromptExtra(value: string) {
    this.promptExtra = value;
  }
}
