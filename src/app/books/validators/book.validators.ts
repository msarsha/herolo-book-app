import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {BooksState} from '../store/reducers/book.reducers';
import {AbstractControl} from '@angular/forms';
import {getAllBooksSelector} from '../store/reducers/book.selectors';
import {map, take} from 'rxjs/operators';
import {Book} from '../models/book';

@Injectable()
export class BookValidators {
  books$;

  constructor(public store: Store<BooksState>) {
    this.books$ = this
      .store
      .select(getAllBooksSelector);
  }

  titleNotExists(book: Book) {
    return (control: AbstractControl) => {
      return this
        .books$
        .pipe(
          take(1),
          map((books: Book[]) => {
            const exists = books
              .find(b => b.title === control.value);

            if (!exists || book.title === control.value) {
              return null;
            }

            return {
              'titleExists': true
            };
          })
        );
    };
  }
}
