import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Book} from '../models/book';
import {MatDialog, MatDialogRef} from '@angular/material';
import {BookModalComponent} from '../book-modal/book-modal.component';
import {BookModalMode} from '../models/book-modal-mode';
import {Store} from '@ngrx/store';
import {BooksState, getAllBooksSelector} from '../store/reducers/book.reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
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
  }

  onEdit(book: Book) {
    this.activeDialog = this.dialog.open(BookModalComponent, {
      data: {book, mode: BookModalMode.Edit}
    });

    this.activeDialog
      .afterClosed()
      .subscribe(this.onModalClose.bind(this));
  }

  onModalClose(book) {
    console.log('closed', book);
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
