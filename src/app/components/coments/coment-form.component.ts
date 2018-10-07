import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-coment-form',
  templateUrl: './coment-form.component.html',
})
export class ComentFormComponent {
  constructor(public dialogRef: MatDialogRef<ComentFormComponent>, @Inject(MAT_DIALOG_DATA) public urlPhoto: string) { }
  onSubmit(textArea: string) {
    event.preventDefault();
    console.log(textArea);
  }
}
