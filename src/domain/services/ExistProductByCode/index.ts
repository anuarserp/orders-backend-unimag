import { ProductRepository } from '../../repositories/ProductRepository'

export class ExistProductByCode {

   constructor(private readonly productRepository: ProductRepository) {}

   async run(code: number): Promise<boolean> {
      const productExist = await this.productRepository.getByCode(code)
      if (productExist) return true
      
      return false
   }
}