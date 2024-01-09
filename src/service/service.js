import { get, post } from './api_helpers';


export const saveUser = (data) => post('http://127.0.0.1:8000/create-user', data);

export const getUser = () => get('http://127.0.0.1:8000/{user_id}');