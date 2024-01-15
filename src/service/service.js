import { get, post } from './api_helpers';


export const saveUser = (data) => post('http://127.0.0.1:8000/create-user', data);

export const geAllUsers = () => get('http://127.0.0.1:8000/fetch-all-users');

export const fetchAllAnalyzedData = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/bubble-map');