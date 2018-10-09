import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

//import { Image } from '../images/image.model'
@Component({
  selector: 'app-coment-form',
  templateUrl: './coment-form.component.html',
  styleUrls: ['./coment-form.component.css']
})

export class ComentFormComponent {
  constructor(public dialogRef: MatDialogRef<ComentFormComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onSubmit(textArea: string) {
    event.preventDefault();
    console.log(textArea);
  }
}
