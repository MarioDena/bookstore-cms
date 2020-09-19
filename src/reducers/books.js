const bookReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'DELETE_BOOK':
      return state.filter((b) => b.id !== action.book.id);
    default:
      return state;
  }
};

export default bookReducer;
