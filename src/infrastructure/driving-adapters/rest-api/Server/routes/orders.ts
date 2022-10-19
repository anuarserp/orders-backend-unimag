import { Router } from 'express'
import { createOrder } from '../controllers/orders/createOrder'

const router = Router()

router.post('/', createOrder)

export { router }