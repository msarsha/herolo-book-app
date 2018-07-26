import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Book} from '../models/book';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css'],
})
export class BookModalComponent implements OnInit {
  book: Book;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.book = data.book;
  }

  ngOnInit() {
  }
}
