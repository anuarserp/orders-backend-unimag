export interface GeneralRepository<T> {
   getAll: () => Promise<T[]>
   getOne: (id: string) => Promise<T | null>
   upsert: (id:string | undefined, item: T) => Promise<string>
   delete?: (id: string) => Promise<boolean>
}