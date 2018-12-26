const initialState = [
  {
    _id: '0',
    description: 'Implement backend API',
    due: '2018-12-26 17:12:00.000'
  },
  {
    _id: '1',
    description: 'Implement frontend using Angular',
    due: '2018-12-26 17:12:00.000'
  }
];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
