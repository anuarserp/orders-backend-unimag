import { NextFunction, Request, Response } from 'express'
import { ProductCreateUseCase } from '@app/usecases/ProductCreate'
import { MongoProductRepository } from '@infrastructure/implementations/Mongoose/repositories/MongoProductRepository'
import ProductModel from '@infrastructure/implementations/Mongoose/models/ProductModel'
import { UuidV4Generator } from '@infrastructure/UuidGenerator'

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const {
      code,
      name,
      price,
   }  = req.body

   const mongoRepo = new MongoProductRepository(ProductModel)
   const uuidV4Generator = new UuidV4Generator()

   const productCreateUseCase = new ProductCreateUseCase(mongoRepo, uuidV4Generator)

   try {
      const productCreate = await productCreateUseCase.run({
         name,
         code,
         price
      })

      res.json(productCreate)
   } catch (e) {
      next(e)
   }
}