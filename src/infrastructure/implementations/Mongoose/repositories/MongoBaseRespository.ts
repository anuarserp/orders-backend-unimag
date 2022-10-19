import { GeneralRepository } from '@domain/repositories/GeneralRepository'
import { Model } from 'mongoose'

export class MongoBaseRepository<T> implements GeneralRepository<T> {

   public model: Model<any>

   async getOne(uuid: string): Promise<T | null> {
      return await this.model.findOne({uuid})
   }

   async getAll(): Promise<T[]> {
      return await this.model.find()
   }
   
   async upsert(id: string | undefined, item: T | any): Promise<string> {
      if (id) {
         const itemUpdate = await this.model.findByIdAndUpdate(id, item)
         return itemUpdate.uuid
      } else {
         const itemCreated = await this.model.create(item)
         return itemCreated.uuid
      }
   }

}