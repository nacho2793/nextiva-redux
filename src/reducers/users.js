import * as types from '../actionTypes/users';

const initialState = {
  users: [
    {
      age: "24",
      id: "cjpx40jru00013g5pxd1v5lcz",
      name: "Ignacio Sainz",
    }, {
      age: "30",
      id: "cjpx40p6u00023g5pwddoki4x",
      name: "Leo",
    }, {
      age: "24",
      id: "cjpx40u4d00033g5pfeksjcl2",
      name: "Augusto",
    }, {
      age: "26",
      id: "cjpx4105700043g5peumntm94",
      name: "Marco"
    },],
}



export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case types.DELETE_USER:
      const userId = action.payload;
      const users = state.users.filter(user => user.id !== userId);
      return { ...state, users };
    default:
      return state
  }
}
