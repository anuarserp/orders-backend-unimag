import { NextFunction, Request, Response } from 'express'
import { ProductsGetterUseCase } from '@app/usecases/ProductsGetter'
import { MongoProductRepository } from '@infrastructure/implementations/Mongoose/repositories/MongoProductRepository'
import ProductModel from '@infrastructure/implementations/Mongoose/models/ProductModel'

export const getProducts = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {

   const mongoRepo = new MongoProductRepository(ProductModel)
   const productsGetterUseCase = new ProductsGetterUseCase(mongoRepo)

   try {
      const products = await productsGetterUseCase.run()

      res.json(products)
      return
   } catch (e) {
      return next(e)
   }
}