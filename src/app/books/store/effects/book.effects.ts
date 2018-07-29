import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {
  ADD_BOOK,
  AddBook, DELETE_BOOK, DeleteBook,
  LOAD_BOOKS,
  LOAD_BOOKS_FAIL,
  LoadBooksFail,
  LoadBooksSuccess,
  UPDATE_BOOK,
  UpdateBook
} from '../actions/book.actions';
import {BooksService} from '../../books.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of, pipe} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class BooksEffects {
  constructor(
    public actions$: Actions,
    public booksService: BooksService,
    public matSnackBar: MatSnackBar) {
  }

  @Effect()
  loadBooks$ = this.actions$.pipe(
    ofType(LOAD_BOOKS),
    switchMap(() => {
      return this
        .booksService
        .getBooks()
        .pipe(
          map(books => new LoadBooksSuccess(books),
            catchError(() => of([]))
          )
        );
    }),
    catchError(() => of(new LoadBooksFail()))
  );

  @Effect({dispatch: false})
  addNewBook$ = this.actions$.pipe(
    pipe(
      ofType(ADD_BOOK),
      switchMap((action: AddBook) => {
        return this
          .booksService
          .addNewBook(action.payload)
          .pipe(
            catchError(() => of({}))
          );
      })
    )
  );

  @Effect({dispatch: false})
  updateBook$ = this.actions$.pipe(
    pipe(
      ofType(UPDATE_BOOK),
      switchMap((action: UpdateBook) => {
        return this
          .booksService
          .updateBook(action.payload)
          .pipe(
            catchError(() => of({}))
          );
      })
    )
  );

  @Effect({dispatch: false})
  deleteBook$ = this.actions$.pipe(
    pipe(
      ofType(DELETE_BOOK),
      switchMap((action: DeleteBook) => {
        return this
          .booksService
          .deleteBook(action.payload)
          .pipe(
            catchError(() => of({}))
          );
      })
    )
  );

  @Effect({dispatch: false})
  loadBooksFailed$ = this.actions$.pipe(
    ofType(LOAD_BOOKS_FAIL),
    tap(() => {
      console.log('BOOKS_FAIL');
      this.matSnackBar.open('Failed to load books', 'ok');
    }));
}
