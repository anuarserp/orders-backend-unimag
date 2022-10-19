import { connect } from 'mongoose'
import config from './config'

const dbInit = async () => {
   await connect(config.DB_URI)
   console.log('Connect Successfully')
}

export default dbInit