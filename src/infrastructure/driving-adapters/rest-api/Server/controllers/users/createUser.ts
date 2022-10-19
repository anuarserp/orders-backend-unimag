import { NextFunction, Request, Response } from 'express'
import { UuidV4Generator } from '@infrastructure/UuidGenerator'
import UserModel from '@infrastructure/implementations/Mongoose/models/UserModel'
import { UserCreateUseCase } from '@app/usecases/UserCreate'
import { Argon2 } from '@infrastructure/Argon2'
import { MongoUserRepository } from '@infrastructure/implementations/Mongoose/repositories/MongoUserRepository'

export const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const {
      password,
      name,
      addres,
      phone
   }  = req.body

   const mongoRepo = new MongoUserRepository(UserModel)
   const uuidV4Generator = new UuidV4Generator()
   const argon2 = new Argon2() 

   const userCreateUseCase = new UserCreateUseCase(mongoRepo, uuidV4Generator, argon2)

   try {
      const userCreate = await userCreateUseCase.run({
         password,
         name,
         addres,
         phone
      })

      res.json(userCreate)
   } catch (e) {
      next(e)
   }
}