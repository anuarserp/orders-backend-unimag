export interface GeneralRepository<T> {
   getAll: () => Promise<T[]>
   getOne: (id: string) => Promise<T | null>
   save: (product: T) => Promise<T>
}