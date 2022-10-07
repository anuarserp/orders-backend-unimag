import { Product } from '@domain/entities/Product'
import { ProductRepository } from '@domain/repositories/ProductRepository'
import { ProductGetterById } from '@domain/services/ProductGetterById'

export class ProductGetterByIdUseCase {
   private readonly productGetterByID: ProductGetterById

   constructor(productRepository: ProductRepository){
      this.productGetterByID = new ProductGetterById(productRepository)
   }

   async run(id: string): Promise<Product> {
      return await this.productGetterByID.run(id)
   }
}