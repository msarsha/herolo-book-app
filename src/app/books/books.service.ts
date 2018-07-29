import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Book} from './models/book';
import {delay, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private readonly BOOKS_API_URL =
    'https://www.googleapis.com/books/v1/volumes?q=dragonlance';

  constructor(public http: HttpClient) {
  }

  getBooks(): Observable<Book[]> {
    return this
      .http
      .get(this.BOOKS_API_URL)
      .pipe(
        map((data: any) => data.items),
        map((items: any) => {
          return items.map(api_book => {
            return {
              id: api_book.id,
              author: api_book.volumeInfo.authors[0],
              publishDate: new Date(api_book.volumeInfo.publishedDate),
              title: api_book.volumeInfo.title
            };
          });
        })
      );
  }

  deleteBook(book: Book) {
    return of(book).pipe(delay(1000));
  }

  updateBook(book: Book) {
    return of(book).pipe(delay(1000));
  }

  addNewBook(book: Book) {
    return of(book).pipe(delay(1000));
  }
}
