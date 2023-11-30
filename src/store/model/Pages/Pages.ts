import {action, makeAutoObservable} from 'mobx';
import {IPageItem, IPageListPrompt, IPages} from './types';

export class Pages implements IPages {

  pages: IPageItem[] = [];

  promptSubject = '';

  promptType = '';

  promptPurpose = '';

  promptProperty = '';

  promptExtra = '';

  pageListPrompt: IPageListPrompt = {
    subject: 'Собственное производство полуфабрикатов',
    type: 'интернет-магазин',
    purpose: 'продажа',
    property: 'микробизнес',
  };

  promptContentSubject = '';

  promptContentType = '';

  promptContentPurpose = '';

  promptContentProperty = '';


  constructor() {
    makeAutoObservable(this);
  }

  setPageListPrompt({subject = '', type = '', purpose = '', property = ''}: IPageListPrompt) {
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

    @action
  addPage(page: IPageItem) {
    this.pages.push(page);
  }

    deletePage(pageId: string) {
      this.pages = this.pages.filter((page) => page.id !== pageId);
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

    setContentSubject(value: string) {
      this.promptContentSubject = value;
    }

    setContentType(value: string) {
      this.promptContentType = value;
    }

    setContentPurpose(value: string) {
      this.promptContentPurpose = value;
    }

    setContentProperty(value: string) {
      this.promptContentProperty = value;
    }

}
