import * as types from '../types';

const initialState = [];

export function taskReducer(state = initialState, action) {
  switch (action.type) {
    case types.TasksTypes.responseList:
      return action.payload;

    case types.TasksTypes.responseUpdate:
      const { payload } = action;
      return state.map((item) => {
        if (item._id === payload._id) {
          return payload;
        }

        return item;
      });

    case types.TasksTypes.responseCreate:
      return [...state, action.payload];

    case types.TasksTypes.responseDelete:
      const { _id } = action.payload;

      return state.filter((item) => {
        return item._id !== _id;
      });

    default:
      return state;
  }
}
