const MAIN_NAME = "generator_content";

export const useLocalStorage = () => {
  const getData = <T>(keyItem: string): T => {
    const data = localStorage.getItem(MAIN_NAME);

    if (data) {
      const parsed = JSON.parse(data);

      if (parsed[keyItem]) {
        return parsed[keyItem];
      }
      return null;
    } else {
      return null;
    }
  };

  const setData = (keyItem: string, value: unknown) => {
    const data = localStorage.getItem(MAIN_NAME);

    if (data) {
      const parsed = JSON.parse(data);
      if (parsed[keyItem]) {
        parsed[keyItem] = value;
        localStorage.setItem(MAIN_NAME, JSON.stringify(parsed));
      }
    } else {
      const newData: Record<string, unknown> = {};

      newData[keyItem] = value;
      localStorage.setItem(MAIN_NAME, JSON.stringify(newData));
    }
  };

  return {
    getData,
    setData,
  };
};
