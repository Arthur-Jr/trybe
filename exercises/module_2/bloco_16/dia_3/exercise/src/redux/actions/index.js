export const LOGIN_ACTION = 'LOGIN_ACTION';
export const ADD_CLIENT = 'ADD_CLIENT';

export const login = (data) => ({ type: LOGIN_ACTION, data });

export const addClient = (client) => ({ type: ADD_CLIENT, client });
