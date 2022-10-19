import { User } from '@domain/entities/User'
import { UserRepository } from '@domain/repositories/UserRepository'
import { Model } from 'mongoose'
import { MongoBaseRepository } from './MongoBaseRespository'

export class MongoUserRepository extends MongoBaseRepository<User> implements UserRepository {
   constructor(model: Model<any>){ 
      super()
      this.model = model
   }
}