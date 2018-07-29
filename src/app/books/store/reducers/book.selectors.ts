import {BooksState} from './book.reducers';
import {createSelector} from '@ngrx/store';

const getLoading = (state: BooksState) => state.loading;
const getBooks = (state: BooksState) => state.books;

export const getBooksState = (state: any) => state.books;

export const getAllBooksSelector = createSelector(
  getBooksState,
  getBooks
);

export const getBooksLoadingSelector = createSelector(
  getBooksState,
  getLoading
);
