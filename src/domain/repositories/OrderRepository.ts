import { Order } from '@domain/entities/Order'
import { GeneralRepository } from './GeneralRepository'

export type OrderRepository = GeneralRepository<Order>