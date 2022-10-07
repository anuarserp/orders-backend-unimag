import { NextFunction, Request, Response, Router } from 'express'
import { readdirSync } from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

const cleanFileName = (fileName: string) => {
   return fileName.split('.').shift()
}

readdirSync(PATH_ROUTER).filter((fileName) => {
   const cleanName = cleanFileName(fileName)
   if (cleanName !== 'index') {
      import(`./${cleanName}`).then((moduleRouter) => {
         router.use(`/${cleanName}`, moduleRouter.router)
      })
   }
})

router.use((req: Request, res: Response, next: NextFunction) =>{
   console.log(req.method, req.url)
   next()
})

export { router }