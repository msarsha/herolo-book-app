import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {LOAD_BOOKS, LOAD_BOOKS_FAIL, LoadBooksFail, LoadBooksSuccess} from '../actions/book.actions';
import {BooksService} from '../../books.service';
import {catchError, map, switchMap, tap} from 'rxjs/operators';
import {of} from 'rxjs';
import {MatSnackBar} from '@angular/material';

@Injectable()
export class BooksEffects {
  constructor(
    public actions$: Actions,
    public booksService: BooksService,
    public matSnackBar: MatSnackBar) {
  }

  @Effect({dispatch: false})
  loadBooksFailed$ = this.actions$.pipe(
    ofType(LOAD_BOOKS_FAIL),
    tap(() => {
      console.log('BOOKS_FAIL');
      this.matSnackBar.open('Failed to load books', 'ok');
    }));

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
}
