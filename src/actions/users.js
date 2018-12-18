import { createAction } from 'redux-actions';
import * as types from '../actionTypes/users';

export const addUser = createAction(types.ADD_USER);
