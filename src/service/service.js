import { get, post } from './api_helpers';
import * as url from './url_helpers';

export const saveUser = (data) => post('create-user', data);
