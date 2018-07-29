import {NgModule} from '@angular/core';
import {BooksListComponent} from './books-list/books-list.component';
import {BookCardComponent} from './book-card/book-card.component';
import {CommonModule} from '@angular/common';
import {BookModalComponent} from './book-modal/book-modal.component';
import {BooksMaterialModule} from './books-material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {AlphaNumericPipe} from './pipes/alpha-numeric.pipe';
import {CamelCasePipe} from './pipes/camel-case.pipe';
import {StoreModule} from '@ngrx/store';
import {booksReducer} from './store/reducers/book.reducers';
import {EffectsModule} from '@ngrx/effects';
import {BooksEffects} from './store/effects/book.effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BooksMaterialModule,

    StoreModule.forRoot({books: booksReducer}),
    EffectsModule.forRoot([BooksEffects])
  ],
  exports: [
    BooksListComponent
  ],
  declarations: [
    BooksListComponent,
    BookCardComponent,
    BookModalComponent,
    AlphaNumericPipe,
    CamelCasePipe
  ],
  providers: [],
  entryComponents: [
    BookModalComponent
  ]
})
export class BooksModule {
}


//https://www.googleapis.com/books/v1/volumes?q=dragonlance
