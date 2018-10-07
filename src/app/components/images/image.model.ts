import { Coment } from '../coments/coment.model'

export class Image {
  id: string;
  nameAuthor: string;
  namePhoto: string;
  description: string;
  urlPhoto: string;

  constructor(
    id: string,
    nameAuthor: string,
    namePhoto: string,
    description: string,
    urlPhoto: string
  ) {
    this.id = id;
    this.nameAuthor = nameAuthor;
    this.namePhoto = namePhoto;
    this.description = description;
    this.urlPhoto = urlPhoto;
   }
}
