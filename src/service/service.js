import { post, get } from '../helpers/api_helper';
import * as url from './url_helper';

export const saveGlobalAccount = (data, coUserId) => post(url.SAVE_GLOBAL_ACCOUNT + coUserId, data);
export const getGlobalAccounts = (coUserId) => get(url.GET_GLOBAL_ACCOUNTS + coUserId);
