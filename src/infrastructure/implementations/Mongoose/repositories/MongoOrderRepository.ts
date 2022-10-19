import { Order } from '@domain/entities/Order'
import { OrderRepository } from '@domain/repositories/OrderRepository'
import { Model } from 'mongoose'
import { MongoBaseRepository } from './MongoBaseRespository'

export class MongoOrderRepository extends MongoBaseRepository<Order> implements OrderRepository {
   constructor(model: Model<any>){ 
      super()
      this.model = model
   }
}