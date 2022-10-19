import { User } from '@domain/entities/User'
import { GeneralRepository } from './GeneralRepository'

export type UserRepository = GeneralRepository<User>