import { IState } from '../../interfaces/store.interfaces';

const initialState: IState = {
  loading: false,
  auth: null,
  user: null,
  errors: []
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
