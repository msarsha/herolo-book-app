import {Book} from '../../models/book';
import {
  ADD_BOOK,
  AddBook,
  BookActions, DELETE_BOOK, DeleteBook,
  LOAD_BOOKS,
  LOAD_BOOKS_FAIL,
  LOAD_BOOKS_SUCCESS,
  LoadBooksSuccess,
  UPDATE_BOOK, UpdateBook
} from '../actions/book.actions';

export interface BooksState {
  books: Book[];
  loading: boolean;
}

export const initialState: BooksState = {
  books: [],
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
        books
      };
    }
    case LOAD_BOOKS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADD_BOOK: {
      const addBookAction = action as AddBook;
      const book = addBookAction.payload;

      return {
        ...state,
        books: [book, ...state.books]
      };
    }
    case UPDATE_BOOK: {
      const updateBookAction = action as UpdateBook;
      const updatedBook = updateBookAction.payload;

      const existingBook = state.books.find(b => b.id === updatedBook.id);
      if (!existingBook) {
        return state;
      }

      const index = state.books.indexOf(existingBook);
      const booksCopy = [...state.books];
      booksCopy[index] = {...existingBook, ...updatedBook};

      return {
        ...state,
        books: booksCopy
      };
    }
    case DELETE_BOOK: {
      const deleteBookAction = action as DeleteBook;
      const deletedBook = deleteBookAction.payload;

      const index = state.books.findIndex(b => b.id === deletedBook.id);
      if (index < 0) {
        return state;
      }

      return {
        ...state,
        books: state.books.filter(b => b.id !== deletedBook.id)
      };
    }
  }

  return state;
}
