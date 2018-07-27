import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Book} from '../models/book';
import {BookModalMode} from '../models/book-modal-mode';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CamelCasePipe} from '../pipes/camel-case.pipe';
import {AlphaNumericPipe} from '../pipes/alpha-numeric.pipe';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CamelCasePipe, AlphaNumericPipe]
})
export class BookModalComponent implements OnInit {
  bookForm: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { book: Book, mode: BookModalMode },
    public dialogRef: MatDialogRef<BookModalComponent>,
    public formBuilder: FormBuilder,
    public camelCasePipe: CamelCasePipe,
    public alphaNumericPipe: AlphaNumericPipe) {

    this.buildForm(data.book);
  }

  ngOnInit(): void {
    this.transformTitle();
  }

  transformTitle() {
    this
      .titleFormControl
      .valueChanges
      .subscribe(value => {
        let transformedValue = this.camelCasePipe.transform(value);
        transformedValue = this.alphaNumericPipe.transform(transformedValue);

        this
          .titleFormControl
          .setValue(transformedValue, {
            emitEvent: false,
            onlySelf: true
          });
      });
  }

  buildForm(book) {
    this.bookForm = this
      .formBuilder
      .group({
        title: [this.isNewMode ? '' : book.title, Validators.required],
        author: [this.isNewMode ? '' : book.author, Validators.required],
        publishDate: [this.isNewMode ? new Date() : book.publishDate, Validators.required]
      });
  }

  onSave(value) {
    const book = {...value, id: this.isNewMode ? 0 : this.data.book.id};

    this.dialogRef.close({
      book,
      mode: this.data.mode
    });
  }

  get title(): string {
    const {mode, book} = this.data;
    return mode === BookModalMode.Edit ? book.title : 'New Book';
  }

  get isNewMode(): boolean {
    return this.data.mode === BookModalMode.New;
  }

  get titleFormControl(): FormControl {
    return this.bookForm.get('title') as FormControl;
  }

  get authorFormControl(): FormControl {
    return this.bookForm.get('author') as FormControl;
  }

  get publishDateFormControl(): FormControl {
    return this.bookForm.get('publishDate') as FormControl;
  }
}
