import { instance } from './config';
import { PATH } from '../constant';

export const API = {
  getTodoApi: () => instance.get(PATH.getTodo),
};
