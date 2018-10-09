import { Component, OnInit } from '@angular/core';
import { ImageApiService } from '../../services/image-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: Image[];
  searching : boolean = true;

  handleSuccess(data) {
    this.images = data.hits;
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
      () => this.searching = true,
      //() => console.log("Request Completado!!")
    )
  }

  renderImage(query: string) {
    return this.imageApiService.getImage(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
    )
  }

  ngOnInit() {
    this.renderImage('sky');
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

