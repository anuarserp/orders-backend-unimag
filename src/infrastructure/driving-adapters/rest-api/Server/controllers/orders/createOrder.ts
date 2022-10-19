import { NextFunction, Request, Response } from 'express'
import { OrderCreateUseCase } from '@app/usecases/OrderCreate'
import OrderModel from '@infrastructure/implementations/Mongoose/models/OrderModel'
import { MongoOrderRepository } from '@infrastructure/implementations/Mongoose/repositories/MongoOrderRepository'
import { MongoProductRepository } from '@infrastructure/implementations/Mongoose/repositories/MongoProductRepository'
import ProductModel from '@infrastructure/implementations/Mongoose/models/ProductModel'
import { UuidV4Generator } from '@infrastructure/UuidGenerator'

export const createOrder = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const {body}  = req

   const mongoOrderRepo = new MongoOrderRepository(OrderModel)
   const mongoProductRepo = new MongoProductRepository(ProductModel)
   const uuidGenerator = new UuidV4Generator()

   const orderCreateUseCase = new OrderCreateUseCase(mongoOrderRepo, mongoProductRepo, uuidGenerator)

   try {
      const orderCreate = await orderCreateUseCase.run(body)

      res.json(orderCreate)
   } catch (e) {
      next(e)
   }
}