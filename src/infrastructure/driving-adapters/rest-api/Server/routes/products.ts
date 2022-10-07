import { Router } from 'express'
import {
   createProduct,
   getProducts,
   getProduct
} from '../controllers/products'


const router = Router()

router.get('/', getProducts)
router.get('/:id', getProduct)
router.post('/', createProduct)



export { router }