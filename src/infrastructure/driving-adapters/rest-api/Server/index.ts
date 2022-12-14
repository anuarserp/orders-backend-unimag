import dbInit from '@infrastructure/driven-adapters/Mongoose/db'
import express from 'express'
import * as http from 'http'
import errorMiddleware from './middlewares/error.middleware'
import { router } from './routes'

export class Server {
   private readonly port: string
   private readonly app: express.Express
   private httpServer?: http.Server

   constructor (port: string) {
      this.port = port
      this.app = express()
      this.app.use(express.json())
      this.app.use(express.urlencoded({ extended: false }))
      this.app.use(router)
      this.app.use(errorMiddleware)
   }

   async listen (): Promise<void> {
      return await new Promise(resolve => {
         dbInit().then(() => {
            this.httpServer = this.app.listen(this.port, () => {
               console.log(
                  `Server is running at http://localhost:${this.port}`
               )
               console.log('Press CTRL-C to stop\n')
               resolve()
            })
         })
         
      })
   }

   async stop (): Promise<void> {
      return await new Promise((resolve, reject) => {
         if (this.httpServer != null) {
            this.httpServer.close(error => {
               if (error != null) {
                  return reject(error)
               }
               return resolve()
            })
         }
         return resolve()
      })
   }
}