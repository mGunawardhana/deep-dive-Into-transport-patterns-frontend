import { get, post } from './api_helpers';

export const saveUser = (data) => post('http://127.0.0.1:8000/create-user', data);
export const geAllUsers = () => get('http://127.0.0.1:8000/fetch-all-users');
export const fetchAllAnalyzedDataByDay = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/bubble-map');
export const fetchAllAnalyzedDataByWeekDay = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/day');
export const fetchAllAnalyzedDataByMonth = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/day');
export const fetchAllAnalyzedDataBubble = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/bubble-map');
