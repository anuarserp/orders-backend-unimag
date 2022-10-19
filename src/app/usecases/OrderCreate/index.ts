import { Order } from '@domain/entities/Order'
import { ProductNotFoundException } from '@domain/exceptions'
import { OrderRepository } from '@domain/repositories/OrderRepository'
import { ProductRepository } from '@domain/repositories/ProductRepository'
import { ProductGetterById } from '@domain/services/ProductGetterById'
import { UuidGenerator } from '@domain/utils/UuidGenerator'


export class OrderCreateUseCase {
   private readonly productGetterById: ProductGetterById
   private readonly uuidGenerator: UuidGenerator
   private readonly orderRepository: OrderRepository

   constructor(
      orderRepository: OrderRepository,
      productRepository: ProductRepository,
      uuidGenerator: UuidGenerator
   ){
      this.productGetterById = new ProductGetterById(productRepository)
      this.uuidGenerator = uuidGenerator
      this.orderRepository = orderRepository

   }

   async run(body: Order): Promise<string> {

      body.orderedProducts.forEach(async ({productId}) => {
         const existProduct = await this.productGetterById.run(productId)
         if (!existProduct) throw new ProductNotFoundException()
      })

      body.uuid = this.uuidGenerator.generate()

      const orderId = await this.orderRepository.upsert(undefined , body)

      return orderId
   }
}