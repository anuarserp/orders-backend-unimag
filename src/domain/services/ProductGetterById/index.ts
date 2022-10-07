import { Product } from '../../entities/Product'
import { ProductNotFoundException } from '../../exceptions/ProductExceptions/ProductNotFoundException'
import { ProductRepository } from '../../repositories/ProductRepository'

export class ProductGetterById {

   constructor(private readonly productRepository: ProductRepository) {}

   async run(id: string): Promise<Product> {
      const product = await this.productRepository.getOne(id)
      if (!product) throw new ProductNotFoundException()

      return product
   }
}