export const createBooks = (book) => ({ type: 'CREATE_BOOK', book });
export const deleteBooks = (book) => ({ type: 'DELETE_BOOK', book });
export const filterBooks = (filter) => ({ type: 'CHANGE_FILTER', filter });
