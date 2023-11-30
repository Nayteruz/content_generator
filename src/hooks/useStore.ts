import { createContext, useContext } from 'react';
import { store } from '@/store';

const storeContext = createContext(store);

export function useStore() {
  return useContext(storeContext);
}