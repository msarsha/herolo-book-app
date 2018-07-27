import {NgModule} from '@angular/core';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule, MatNativeDateModule
} from '@angular/material';
import {MatDialogConfig} from '@angular/material/dialog/typings/dialog-config';

const matDialogDefaultOptions: MatDialogConfig = {
  hasBackdrop: true,
  minWidth: '330px'
};

@NgModule({
  imports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: matDialogDefaultOptions}
  ]
})
export class BooksMaterialModule {
}
