import { Container, CosmosClient } from '@azure/cosmos'
import config from './config'

export class CosmosDB {
   private static container: Container | undefined 

   static getContainer(container: string) {
      const { endpoint, key, databaseId } = config
      const client = new CosmosClient({ endpoint, key })
      const database = client.database(databaseId)
      this.container = database.container(container)
      return this.container
   } 
}
