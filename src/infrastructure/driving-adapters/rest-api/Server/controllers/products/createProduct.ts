import { NextFunction, Request, Response } from 'express'
import { ProductCreateUseCase } from '@app/usecases/ProductCreate'
import { CosmosDBRepository } from '@infrastructure/implementations/Azure/CosmosDBRepository'

export const createProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const {
      code,
      name,
      price,
   }  = req.body

   const cosmosRepo = new CosmosDBRepository('products')
   const productCreateUseCase = new ProductCreateUseCase(cosmosRepo)

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