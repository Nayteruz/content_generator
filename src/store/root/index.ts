import { IRootStoreModel } from './types';
import {Pages} from '@/store/model/Pages';

class RootStoreModel implements IRootStoreModel {
  page = new Pages();
}

export const store = new RootStoreModel();