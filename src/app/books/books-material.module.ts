import {NgModule} from '@angular/core';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule, MatInputModule
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
    MatInputModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: matDialogDefaultOptions}
  ]
})
export class BooksMaterialModule {
}
