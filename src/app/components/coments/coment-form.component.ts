import { Component, Inject, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

import { Image } from '../images/image.model'
@Component({
  selector: 'app-coment-form',
  templateUrl: './coment-form.component.html',
})

export class ComentFormComponent {
  constructor(public dialogRef: MatDialogRef<ComentFormComponent>, @Inject(MAT_DIALOG_DATA) public urlPhoto: string) { }

  image: Image = new Image(
    "01",
    "watherhouse",
    "Iron Fist",
    "Ilustration",
    "https://i.pinimg.com/originals/11/df/72/11df72cda9b3fef6b496371be5772559.jpg"
  )

  onSubmit(textArea: string) {
    event.preventDefault();
    console.log(textArea);
  }
}
