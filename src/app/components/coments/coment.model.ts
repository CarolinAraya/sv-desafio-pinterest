import { Image } from '../images/image.model'

export class User {
  constructor(
    public firstName: string,
    public lastName: string
  ){}
}
export class Coment {
  constructor(
    public description: string,
    public image: Image,
    public user?: User
  ){}
}
