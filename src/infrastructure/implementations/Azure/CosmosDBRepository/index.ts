import { Container, FeedResponse, ResourceResponse, SqlQuerySpec } from '@azure/cosmos'
import { Product } from '@domain/entities/Product'
import { ProductRepository } from '@domain/repositories/ProductRepository'
import { CosmosDB } from '@infrastructure/driven-adapters/Azure/Cosmos'

export class CosmosDBRepository implements ProductRepository {
   private readonly db: Container 
   constructor(container: string) {
      this.db = CosmosDB.getContainer(container)
   }

   async getAll(): Promise<Product[]> {
      const querySpec: SqlQuerySpec = {
         query: 'SELECT c.id, c.name, c.code, c.price FROM c',
      }

      const { resources: products }: FeedResponse<Product> = await this.db.items
         .query(querySpec)
         .fetchAll()
      return products
   }

   async getOne(id: string): Promise<Product | null> {
      const { resource: product }: ResourceResponse<Product> = await this.db.item(id, undefined).read()
      if (!product) return null

      return product
   }

   async getByCode(code: number): Promise<Product | null> {
      const querySpec: SqlQuerySpec = {
         query: 'SELECT * FROM c WHERE c.code = @code',
         parameters: [
            {  
               name: '@code', 
               value: code
            }
         ]
      }

      const { resources: products }: FeedResponse<Product> = await this.db.items
         .query(querySpec)
         .fetchAll()
         
      if (products.length == 0) return  null

      return products[0]

   }

   async save(product: Product): Promise<Product> {
      const { resource: createdItem } = await this.db.items.create(product)
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return createdItem!
   }
}
