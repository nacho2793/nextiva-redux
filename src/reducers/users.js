import * as types from '../actionTypes/users';

const initialState = {
  users: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    default:
      return state
  }
}
