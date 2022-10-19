import { Encrypt } from '@domain/utils/Encrypt'
import * as argon2 from 'argon2'

export class Argon2 implements Encrypt {
   async validate(value: string, compare: string): Promise<boolean> {
      return await argon2.verify(value, compare)
   }

   async hash(value: string): Promise<string> {
      return await argon2.hash(value)
   }
}