import {Component, TemplateRef, ViewChild} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';
import {Book} from '../models/book';
import {MatDialog, MatDialogRef} from '@angular/material';
import {BookModalComponent} from '../book-modal/book-modal.component';
import {BookModalMode} from '../models/book-modal-mode';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {
  books: Book[];

  @ViewChild('deleteBookTemplate') deleteBookTemplate: TemplateRef<any>;

  activeDialog: MatDialogRef<BookModalComponent>;

  constructor(public breakpointObserver: BreakpointObserver,
              public dialog: MatDialog) {
    // this.books = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    //   map(({ matches }) => {
    //     if (matches) {}
    //   })
    // );

    this.books = [
      {
        id: 1,
        author: 'Wizards of the Coast',
        publishDate: new Date(),
        title: 'Masters of Dragonlance Art'
      },
      {
        id: 2,
        author: 'two',
        publishDate: new Date(),
        title: 'two two'
      },
      {
        id: 3,
        author: 'Three',
        publishDate: new Date(),
        title: 'Three Three'
      },
      {
        id: 4,
        author: 'Four',
        publishDate: new Date(),
        title: 'Four Four'
      }
    ];
  }

  onEdit(book: Book) {
    this.activeDialog = this.dialog.open(BookModalComponent, {
      data: {book, mode: BookModalMode.Edit}
    });
  }

  onNew() {
    this.activeDialog = this.dialog.open(BookModalComponent, {
      data: {mode: BookModalMode.New}
    });
  }

  onDelete(book: Book) {
    console.log('delete', book);
    this.dialog.open(this.deleteBookTemplate, {
      data: {book}
    });
  }
}
