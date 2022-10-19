import { model, Schema } from 'mongoose'

const UserSchema = new Schema(
   {
      uuid: {
         type: String,
         unique: true
      },
      name: {
         type: String
      },
      password: {
         type: String
      },
      phone: {
         type: String
      },
      address: {
         type: String
      },

   }, 
   {
      timestamps: true,
   }
)

export default model('User', UserSchema)