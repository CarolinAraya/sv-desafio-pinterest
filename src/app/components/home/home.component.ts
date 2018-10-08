import { Component, OnInit } from '@angular/core';
import { ImageApiService } from '../../services/image-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  image: any[];

  constructor(private imageApiService: ImageApiService) { }

  searchImages(query: string) {
    return this.imageApiService.getImage(query).subscribe(
      data => console.log(data),
      error => console.log(error),
      () => console.log("Request Completado!!")
    )
  }

  ngOnInit() {
  }

}
