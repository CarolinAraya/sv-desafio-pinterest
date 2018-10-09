import { Component, OnInit } from '@angular/core';
import { ImageApiService } from '../../services/image-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Image[];
  imagesFound: boolean = false;
  searching : boolean = false;

  handleSuccess(data) {
    this.images = data.hits;
    this.imagesFound = true;
    console.log(data.hits);
  }

  handleError(error) {
    console.log(error);
  }

  constructor(private imageApiService: ImageApiService) { }

  searchImages(query: string) {
    return this.imageApiService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false,
      //() => console.log("Request Completado!!")
    )
  }

  ngOnInit() {
  }

}

export interface Image {
  id: number,
  pageURL: string,
  type: string,
  tags: string,
  previewURL: string,
  previewWidth: number,
  previewHeight: number,
  webformatURL: string,
  webformatWidth: number,
  webformatHeight: number,
  largeImageURL: string,
  fullHDURL: string,
  imageURL: string,
  imageWidth: number,
  imageHeight: number,
  imageSize: number,
  views: number,
  downloads: number,
  favorites: number,
  likes: number,
  comments: number,
  user_id: number,
  user: string,
  userImageURL: string,
}

