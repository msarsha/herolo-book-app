import {NgModule} from '@angular/core';
import {BooksListComponent} from './books-list/books-list.component';
import {BookCardComponent} from './book-card/book-card.component';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {BookModalComponent} from './book-modal/book-modal.component';
import {MatDialogConfig} from '@angular/material/dialog/typings/dialog-config';

const matDialogDefaultOptions: MatDialogConfig = {
  hasBackdrop: true,
  minWidth: '330px'
};

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports: [
    BooksListComponent
  ],
  declarations: [
    BooksListComponent,
    BookCardComponent,
    BookModalComponent
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: matDialogDefaultOptions}
  ],
  entryComponents: [
    BookModalComponent
  ]
})
export class BooksModule {
}


//https://www.googleapis.com/books/v1/volumes?q=dragonlance
