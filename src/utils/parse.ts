
export interface IItem {
    name: string;
    id?: string;
    content?: string;
}

export interface IItemWithSublist extends IItem{
    sublist?: IItem[]
}

export const parseResult = (message: string) => {

    const parsedList: IItemWithSublist[] = JSON.parse(message).list;

    const flatList: IItem[] = parsedList.reduce((acc: any, item: IItemWithSublist) => {
        const newItem = [{name: item.name, id: crypto.randomUUID(), content: ''}];
        if (item?.sublist) {
            const subItems = item.sublist.map((subItem) => ({name: subItem.name, id: crypto.randomUUID(), content: ''}));
            newItem.push(...subItems)
        }
        acc.push(...newItem);
        return acc;
    }, [])

    return flatList;
}