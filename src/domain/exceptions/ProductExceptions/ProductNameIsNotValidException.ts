import { Exception } from '../Exception'

export class ProductNameIsNotValidException extends Exception {
   constructor() {
      super('The Product Name Has More Than 20 characters')
   }
}