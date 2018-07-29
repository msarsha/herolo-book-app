import {Action} from '@ngrx/store';
import {Book} from '../../models/book';

export const LOAD_BOOKS = '[Books] Load Books';
export const LOAD_BOOKS_FAIL = '[Books] Load Books Fail';
export const LOAD_BOOKS_SUCCESS = '[Books] Load Books Success';

export const ADD_BOOK = '[Books] Add New Book';
export const DELETE_BOOK = '[Books] Delete a Book';
export const UPDATE_BOOK = '[Books] Update a Book';


export class LoadBooks implements Action {
  readonly type: string = LOAD_BOOKS;
}

export class LoadBooksFail implements Action {
  readonly type: string = LOAD_BOOKS_FAIL;
}

export class LoadBooksSuccess implements Action {
  readonly type: string = LOAD_BOOKS_SUCCESS;

  constructor(public payload: Book[]) {
  }
}

export class AddBook implements Action {
  readonly type: string = ADD_BOOK;

  constructor(public payload: Book) {
  }
}

export class DeleteBook implements Action {
  readonly type: string = DELETE_BOOK;

  constructor(public payload: Book) {
  }
}

export class UpdateBook implements Action {
  readonly type: string = UPDATE_BOOK;

  constructor(public payload: Book) {
  }
}

export type BookActions =
  LoadBooks | LoadBooksSuccess | LoadBooksFail | AddBook | DeleteBook | UpdateBook;
