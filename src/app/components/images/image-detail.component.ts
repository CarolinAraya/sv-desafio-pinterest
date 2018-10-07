import { Component } from '@angular/core';
import { Image } from './image.model';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html'
})

export class ImageDetailComponent {
  image: Image = new Image(
    "01",
    "watherhouse",
    "Iron Fist",
    "Ilustration",
    "https://i.pinimg.com/originals/11/df/72/11df72cda9b3fef6b496371be5772559.jpg"
  )
}
