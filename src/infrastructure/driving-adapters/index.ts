import 'module-alias/register'
import 'dotenv/config'
import { BackendApp } from './rest-api/BackendApp'

try {
   new BackendApp().start()
} catch (error) {
   console.log(error)
}