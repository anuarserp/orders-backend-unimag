import { Product } from '@domain/entities/Product'
import { ProductRepository } from '@domain/repositories/ProductRepository'
import { Model } from 'mongoose'
import { MongoBaseRepository } from './MongoBaseRespository'

export class MongoProductRepository extends MongoBaseRepository<Product> implements ProductRepository  {
   constructor(model: Model<any>){ 
      super()
      this.model = model
   }

   async getByCode(code: number): Promise<Product | null> {
      const product = await this.model.findOne({code})

      if(!product) return null
      
      return product
   }
}