import { NextFunction, Request, Response } from 'express'
import { CosmosDBRepository } from '@infrastructure/implementations/Azure/CosmosDBRepository'
import { ProductsGetterUseCase } from '@app/usecases/ProductsGetter'

export const getProducts = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {

   const cosmosRepo = new CosmosDBRepository('products')
   const productsGetterUseCase = new ProductsGetterUseCase(cosmosRepo)

   try {
      const products = await productsGetterUseCase.run()

      res.json(products)
      return
   } catch (e) {
      return next(e)
   }
}