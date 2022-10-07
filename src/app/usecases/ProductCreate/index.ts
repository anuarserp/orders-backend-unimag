import { ProductCodeIsNotValidException, ProductAlreadyExistsException, ProductNameIsNotValidException } from '@domain/exceptions'
import { Product } from '@domain/entities/Product'
import { ProductRepository } from '@domain/repositories/ProductRepository'
import { ExistProductByCode } from '@domain/services/ExistProductByCode'

export class ProductCreateUseCase {
   private readonly productRepository: ProductRepository
   private readonly existProductByCode: ExistProductByCode
   constructor(productRepository: ProductRepository){
      this.productRepository = productRepository
      this.existProductByCode = new ExistProductByCode(productRepository)
   }

   async run(body: Product): Promise<Product> {

      if (body.code.toString().length > 8) throw new ProductCodeIsNotValidException()
      if (body.name.length > 20) throw new ProductNameIsNotValidException()

      const existProduct = await this.existProductByCode.run(body.code)
      if (existProduct) throw new ProductAlreadyExistsException()

      const product = await this.productRepository.save(body)

      return product
   }
}