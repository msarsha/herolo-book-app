import {BooksState} from './book.reducers';
import {createSelector} from '@ngrx/store';

const getLoaded = (state: BooksState) => state.loaded;
const getLoading = (state: BooksState) => state.loading;
const getBooks = (state: BooksState) => state.books;

export const getBooksState = (state: any) => state.books;

export const getAllBooksSelector = createSelector(
  getBooksState,
  getBooks
);

export const getBooksLoadedSelector = createSelector(
  getBooksState,
  getLoaded
);

export const getBooksLoadingSelector = createSelector(
  getBooksState,
  getLoading
);
