import { get, post } from './api_helpers';
import * as url from './url_helpers';

export const saveUser = (data) => post(url.CREATE_USER,data);
export const findUserByTheirID = (coUserId) => get(url.FETCH_USER_BY_THEIR_ID + coUserId);
