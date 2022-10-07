import { NextFunction, Request, Response } from 'express'
import { ProductGetterByIdUseCase } from '@app/usecases/ProductGetterById'
import { CosmosDBRepository } from '@infrastructure/implementations/Azure/CosmosDBRepository'

export const getProduct = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
   const {
      id,
   } = req.params

   const cosmosRepo = new CosmosDBRepository('products')
   const productGetterById = new ProductGetterByIdUseCase(cosmosRepo)

   try {
      const product = await productGetterById.run(String(id))

      res.json(product)
   } catch (e) {
      next(e)
   }
}