import { NextFunction, Request, Response } from 'express'
import {Exception} from '@domain/exceptions/Exception'
 
const  errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
   if (err instanceof Exception) {
      res.status(400).json({
         message: err.message
      })
   } else {
      next(err)
   }
}
 
export default errorMiddleware