import { IState } from '../../interfaces/store.interfaces';
import * as types from '../types';

const initialState: IState = {
  loading: false,
  auth: null,
  user: null,
  errors: []
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.UsersTypes.signIn:

      const { token, ...user } = action.payload;

      return {
        ...state,
        auth: {
          status: true,
          token: token
        },
        user: user
      };

    case types.UsersTypes.logout:
      return {
        ...state,
        auth: {
          status: false,
          token: null
        },
        user: null
      };

    case types.AppTypes.catchError:
      return {
        ...state,
        errors: action.payload
      };

    case types.AppTypes.hideNotification:
      return {
        ...state,
        errors: []
      };

    default:
      return state;
  }
}
