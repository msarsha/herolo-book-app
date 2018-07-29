import {Book} from '../../models/book';
import {BookActions, LOAD_BOOKS, LOAD_BOOKS_FAIL, LOAD_BOOKS_SUCCESS, LoadBooksSuccess} from '../actions/book.actions';

export interface BooksState {
  books: Book[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: BooksState = {
  books: [],
  loaded: false,
  loading: false
};

export function booksReducer(
  state = initialState,
  action: BookActions): BooksState {

  switch (action.type) {
    case LOAD_BOOKS: {
      return {
        ...state,
        loading: true
      };
    }
    case LOAD_BOOKS_SUCCESS: {
      const successAction = action as LoadBooksSuccess;
      const books = successAction.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        books
      };
    }
    case LOAD_BOOKS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}
