import { get, post, put } from './api_helpers';

export const saveUser = (data) => post('http://127.0.0.1:8001/create-user', data);
export const updateUser = (data) => {
  const userData = {
    id: data.id,
    name: data.userName,
    email: data.email,
    password: data.password,
    mobile: data.mobile,
    re_type_password: data.re_type_password,
    country: data.country,
    country_code: data.country_code,
    address: data.address,
    notes: data.notes,
  };
  return put(`http://127.0.0.1:8001/${data.id}`, userData);
};
export const fetchAllUsers = () => get('http://127.0.0.1:8001/fetch-all-users');
export const FetchAllAnalyzedDataByBubbleMap = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/bubble-map');
export const FetchAllAnalyzedDataByHour = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/hour');
export const fetchAllAnalyzedDataByDay = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/day');
export const fetchAllAnalyzedDataBubble = () => get('http://127.0.0.1:8000/level-one/optimised/data/visualise/bubble-map');