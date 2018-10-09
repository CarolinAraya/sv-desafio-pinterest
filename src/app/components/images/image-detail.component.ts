import { Component, Input } from '@angular/core';
import { MatDialogModule, MatDialog } from '@angular/material';

import { ComentFormComponent } from '../coments/coment-form.component';
import { Image } from '../home/home.component';


@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent {
  @Input() image: Image;

  constructor(public matDialog: MatDialogModule, public dialog: MatDialog) { }

  /*   image: Image = new Image(
      "01",
      "watherhouse",
      "Iron Fist",
      "Ilustration",
      "https://i.pinimg.com/originals/11/df/72/11df72cda9b3fef6b496371be5772559.jpg"
    )
   */
  openDialog() {
    let dialogRef = this.dialog.open(ComentFormComponent, {
      data: {
        imageURL: this.image.webformatURL,
        nameImage: this.image.user
      }
      //urlPhoto: 'hola'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}



