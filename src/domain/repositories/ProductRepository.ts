import { Product } from '../entities/Product'
import { GeneralRepository } from './GeneralRepository'

export interface ProductRepository extends GeneralRepository<Product> {
   getByCode: (code: number) => Promise<Product | null>
}