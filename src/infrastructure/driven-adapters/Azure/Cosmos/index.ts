import { Container, CosmosClient } from '@azure/cosmos'
import config from './config'

export class CosmosDB {
   private static container: Container 

   static getContainer(containerId: string) {
      try {
         const { endpoint, key, databaseId } = config
         const client = new CosmosClient({ endpoint, key })
         const database = client.database(databaseId)
         const container = database.container(containerId)
         if(!container) throw new Error('Not Founund Container')
         this.container = container

      } catch (error) {
         console.log(error)
      }
      return this.container
   } 
}
