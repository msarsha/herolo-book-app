import {NgModule} from '@angular/core';
import {BooksListComponent} from './books-list/books-list.component';
import {BookCardComponent} from './book-card/book-card.component';
import {CommonModule} from '@angular/common';
import {BookModalComponent} from './book-modal/book-modal.component';
import {BooksMaterialModule} from './books-material.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksMaterialModule
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
  ],
  entryComponents: [
    BookModalComponent
  ]
})
export class BooksModule {
}


//https://www.googleapis.com/books/v1/volumes?q=dragonlance
