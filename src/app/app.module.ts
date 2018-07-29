import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BooksModule} from './books/books.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {BooksEffects} from './books/store/effects/book.effects';
import {EffectsModule} from '@ngrx/effects';
import {booksReducer} from './books/store/reducers/book.reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BooksModule,
    HttpClientModule,

    StoreModule.forRoot({books: booksReducer}),
    EffectsModule.forRoot([BooksEffects]),

    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
