import { model, Schema } from 'mongoose'

const OrderSchema = new Schema(
   {
      uuid: {
         type: String,
         unique: true
      },
      orderedProducts: [
         {
            productId: {
               type: Schema.Types.String, ref: 'Product'
            },
            quantity: {
               type: Number
            }
         }
      ],
      userId: {
         type: Schema.Types.String, ref: 'User', 
      }, 
   }, 
   {
      timestamps: true,
   }
)

export default model('Order', OrderSchema)