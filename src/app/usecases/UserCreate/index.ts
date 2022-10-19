import { User } from '@domain/entities/User'
import { UserRepository } from '@domain/repositories/UserRepository'
import { Encrypt } from '@domain/utils/Encrypt'
import { UuidGenerator } from '@domain/utils/UuidGenerator'

export class UserCreateUseCase {
   private readonly userRepository: UserRepository
   private readonly uuidGenerator: UuidGenerator
   private readonly encrypt: Encrypt

   constructor(
      userRepository: UserRepository,
      uuidGenerator: UuidGenerator,
      encrypt: Encrypt
   ){
      this.userRepository = userRepository
      this.uuidGenerator = uuidGenerator
      this.encrypt = encrypt
   }

   async run(body: User): Promise<string> {

      body.uuid = this.uuidGenerator.generate()
      body.password = await this.encrypt.hash(body.password)

      const userId = await this.userRepository.upsert(undefined , body)
      return userId
   }
}