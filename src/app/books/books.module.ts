import {NgModule} from '@angular/core';
import {BooksListComponent} from './books-list/books-list.component';
import {BookCardComponent} from './book-card/book-card.component';
import {CommonModule} from '@angular/common';
import {BookModalComponent} from './book-modal/book-modal.component';
import {BooksMaterialModule} from './books-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AlphaNumericPipe} from './pipes/alpha-numeric.pipe';
import {BookValidators} from './validators/book.validators';
import {CapitalizePipe} from './pipes/capitalize.pipe';

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
    BookModalComponent,
    AlphaNumericPipe,
    CapitalizePipe
  ],
  providers: [
    BookValidators
  ],
  entryComponents: [
    BookModalComponent
  ]
})
export class BooksModule {
}
