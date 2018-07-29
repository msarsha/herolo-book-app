import {ChangeDetectionStrategy, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Book} from '../models/book';
import {MatDialog, MatDialogRef} from '@angular/material';
import {BookModalComponent} from '../book-modal/book-modal.component';
import {BookModalMode} from '../models/book-modal-mode';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AddBook, LoadBooks, UpdateBook} from '../store/actions/book.actions';
import {getAllBooksSelector} from '../store/reducers/book.selectors';
import {BooksState} from '../store/reducers/book.reducers';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksListComponent implements OnInit {
  books$: Observable<Book[]>;
  activeDialog: MatDialogRef<BookModalComponent>;

  @ViewChild('deleteBookTemplate') deleteBookTemplate: TemplateRef<any>;

  constructor(public dialog: MatDialog,
              public store: Store<BooksState>) {
  }

  ngOnInit(): void {
    this.books$ = this
      .store
      .select(getAllBooksSelector);

    this.store.dispatch(new LoadBooks());
  }

  onEdit(book: Book) {
    this.activeDialog = this.dialog.open(BookModalComponent, {
      data: {book, mode: BookModalMode.Edit}
    });

    this.activeDialog
      .afterClosed()
      .subscribe(this.onModalClose.bind(this));
  }

  onModalClose(modalResult: { book: Book, mode: BookModalMode }) {
    if (modalResult.mode === BookModalMode.New) {
      this.store.dispatch(new AddBook(modalResult.book));
    } else {
      this.store.dispatch(new UpdateBook(modalResult.book));
    }
  }

  onNew() {
    this.activeDialog = this.dialog.open(BookModalComponent, {
      data: {mode: BookModalMode.New}
    });

    this.activeDialog
      .afterClosed()
      .subscribe(this.onModalClose.bind(this));
  }

  onDelete(book: Book) {
    this.dialog.open(this.deleteBookTemplate, {
      data: {book}
    });
  }
}
