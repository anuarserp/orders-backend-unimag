import { Exception } from '../Exception'

export class ProductCodeIsNotValidException extends Exception {
   constructor() {
      super('The Product Code Has More Than 8 Digits')
   }
}