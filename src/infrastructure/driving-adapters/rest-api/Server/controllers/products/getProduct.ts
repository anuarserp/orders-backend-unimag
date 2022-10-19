import { NextFunction, Request, Response } from 'express'
import { ProductGetterByIdUseCase } from '@app/usecases/ProductGetterById'
import ProductSchema from '@infrastructure/implementations/Mongoose/models/ProductModel'
import { MongoProductRepository } from '@infrastructure/implementations/Mongoose/repositories/MongoProductRepository'

export const getProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const {
      id,
   } = req.params

   const mongoRepo = new MongoProductRepository(ProductSchema)
   const productGetterById = new ProductGetterByIdUseCase(mongoRepo)

   try {
      const product = await productGetterById.run(String(id))

      res.json(product)
   } catch (e) {
      next(e)
   }
}