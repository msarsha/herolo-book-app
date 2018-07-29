import {Book} from '../../models/book';
import {BookActions, LOAD_BOOKS, LOAD_BOOKS_FAIL, LOAD_BOOKS_SUCCESS} from '../actions/book.actions';
import {createSelector} from '@ngrx/store';

export interface BooksState {
  books: Book[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: BooksState = {
  books: [
    {
      id: 1,
      author: 'Wizards of the Coast',
      publishDate: new Date(),
      title: 'Masters of Dragonlance Art'
    },
    {
      id: 2,
      author: 'two',
      publishDate: new Date(),
      title: 'two two'
    },
    {
      id: 3,
      author: 'Three',
      publishDate: new Date(),
      title: 'Three Three'
    },
    {
      id: 4,
      author: 'Four',
      publishDate: new Date(),
      title: 'Four Four'
    }
  ],
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
      return {
        ...state,
        loading: false,
        loaded: true
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

const getLoaded = (state: BooksState) => state.loaded;
const getLoading = (state: BooksState) => state.loading;
const getBooks = (state: BooksState) => state.books;

export const getBooksState = (state: any) => state.books;

export const getAllBooksSelector = createSelector(
  getBooksState,
  getBooks
);

export const getBooksLoaded = createSelector(
  getBooksState,
  getLoaded
);

export const getBooksLoading = createSelector(
  getBooksState,
  getLoading
);
