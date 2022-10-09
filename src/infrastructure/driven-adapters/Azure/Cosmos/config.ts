import 'dotenv/config'

export default {
   endpoint: process.env.COSMOS_ENDPOINT || 'https://peoducts.documents.azure.com:443/' ,
   key: process.env.COSMOS_KEY! || 'bs4k62SfTTH6hrmdH5A2ztJnPHY5dgRa9z1tnMe2AxKheAXwocAEIqvQwHzhHnUGArtAfSDg8TEvELC6teEAAQ==',
   databaseId: process.env.COSMOS_DATABASE! || 'unimag',
   partitionKey: { kind: 'Hash', paths: ['/category'] }
}