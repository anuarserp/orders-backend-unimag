import { Exception } from '../Exception'

export class ProductAlreadyExistsException extends Exception {
   constructor() {
      super('Product Already Exists')
   }
}