export interface Encrypt {
  hash: (value: string) => Promise<string>
  validate: (value: string, compare: string) => Promise<boolean>
}