import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";


@Injectable()

export class ImageApiService {
  private query: string;
  private API_KEY: string = environment.PIXABAY_API_KEY;
  private API_URL: string = environment.PIXABAY_API_URL;
  private URL: string = this.API_URL + this.API_KEY + '&q=';
  private perPage: string = "&per_page=50";

  constructor(private http: Http) { }

  getImage(query) {
    return this.http.get(this.URL + query + this.perPage)
    .pipe(map(res => res.json()));
  }
}
