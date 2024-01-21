import { get, post } from './api_helpers';

export const saveUser = (data) => post('http://127.0.0.1:8001/create-user', data);
export const fetchAllUsers = () => get('http://127.0.0.1:8001/fetch-all-users');
export const FetchAllAnalyzedDataByBubbleMap = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/bubble-map');
export const FetchAllAnalyzedDataByHour = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/hour');
export const fetchAllAnalyzedDataByDay = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/day');
export const fetchAllAnalyzedDataBubble = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/bubble-map');
