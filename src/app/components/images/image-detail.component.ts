import { Component } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material';

import { Image } from './image.model';
import { ComentFormComponent } from '../coments/coment-form.component';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent {
  //dialogResult = "";

  constructor(public matDialog: MatDialogModule, public dialog: MatDialog) { }

  image: Image = new Image(
    "01",
    "watherhouse",
    "Iron Fist",
    "Ilustration",
    "https://i.pinimg.com/originals/11/df/72/11df72cda9b3fef6b496371be5772559.jpg"
  )

  openDialog() {
    let dialogRef = this.dialog.open(ComentFormComponent, {
      //urlPhoto: 'hola'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



