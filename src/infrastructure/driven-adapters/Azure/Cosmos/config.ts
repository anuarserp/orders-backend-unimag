import 'dotenv/config'

export default {
   endpoint: process.env.COSMOS_ENDPOINT!,
   key: process.env.COSMOS_KEY!,
   databaseId: process.env.COSMOS_DATABASE!,
   partitionKey: { kind: 'Hash', paths: ['/category'] }
}