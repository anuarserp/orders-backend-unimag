import { model, Schema } from 'mongoose'

const ProductSchema = new Schema(
   {
      uuid: {
         type: String,
         unique: true
      },
      code: {
         type: Number,
         unique: true
      },
      name: {
         type: String
      },
      price: {
         type: Number
      }
   }, 
   {
      timestamps: true,
   }
)

export default model('Product', ProductSchema)