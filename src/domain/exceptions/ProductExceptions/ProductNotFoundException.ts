import { Exception } from '../Exception'

export class ProductNotFoundException extends Exception {
   constructor(){
      super('Product Not Found')
   }
}
