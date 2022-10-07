import { Product } from '@domain/entities/Product'
import { ProductRepository } from '@domain/repositories/ProductRepository'

export class ProductsGetterUseCase {
   private readonly productRepository: ProductRepository
   constructor(productRepository: ProductRepository){
      this.productRepository = productRepository
   }

   async run(): Promise<Product[]> {
      const products: Product[] = await this.productRepository.getAll()
      return products
   }
}