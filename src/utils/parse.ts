export interface IItem {
  name: string;
  id?: string;
  description?: string;
  content?: string;
}

export interface IItemWithSublist extends IItem {
  sublist?: IItem[];
}

export const parseResult = (message: string) => {
  const parsedList: IItemWithSublist[] = JSON.parse(message).list;

  const flatList: IItem[] = parsedList.reduce(
    (acc: any, item: IItemWithSublist) => {
      const newItem = [
        { name: item.name, id: crypto.randomUUID(), content: '', description: item.description },
      ];

      if (item?.sublist) {
        const subItems = item.sublist.map((subItem) => ({
          name: subItem.name,
          id: crypto.randomUUID(),
          content: '',
          description: subItem.description,
        }));

        newItem.push(...subItems);
      }

      acc.push(...newItem);

      return acc;
    },
    [],
  );

  return flatList;
};

export interface IQuestion {
  name: string;
}

export const parsePageQuestion = (message: string) => {
  const parsed: IQuestion[] = JSON.parse(message).list;
  const parsedList = parsed.map((item) => ({
    question: item.name,
    id: crypto.randomUUID(),
    answer: '',
  }));

  return parsedList;
};
