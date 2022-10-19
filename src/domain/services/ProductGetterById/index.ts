import { Product } from '../../entities/Product'
import { ProductNotFoundException } from '../../exceptions/ProductExceptions/ProductNotFoundException'
import { ProductRepository } from '../../repositories/ProductRepository'

export class ProductGetterById {

   constructor(private readonly productRepository: ProductRepository) {}

   async run(uuid: string): Promise<Product> {
      const product = await this.productRepository.getOne(uuid)
      if (!product) throw new ProductNotFoundException()

      return product
   }
}