import { ProductCodeIsNotValidException, ProductAlreadyExistsException, ProductNameIsNotValidException } from '@domain/exceptions'
import { Product } from '@domain/entities/Product'
import { ProductRepository } from '@domain/repositories/ProductRepository'
import { ExistProductByCode } from '@domain/services/ExistProductByCode'
import { UuidGenerator } from '@domain/utils/UuidGenerator'

export class ProductCreateUseCase {
   private readonly productRepository: ProductRepository
   private readonly existProductByCode: ExistProductByCode
   private readonly uuidGenerator: UuidGenerator
   
   constructor(productRepository: ProductRepository, uuidGenerator: UuidGenerator){
      this.productRepository = productRepository
      this.existProductByCode = new ExistProductByCode(productRepository)
      this.uuidGenerator = uuidGenerator
   }

   async run(body: Product): Promise<string> {

      if (body.code.toString().length > 8) throw new ProductCodeIsNotValidException()
      if (body.name.length > 20) throw new ProductNameIsNotValidException()

      const existProduct = await this.existProductByCode.run(body.code)
      if (existProduct) throw new ProductAlreadyExistsException()

      body.uuid = this.uuidGenerator.generate()
      const productId = await this.productRepository.upsert(undefined , body)

      return productId
   }
}