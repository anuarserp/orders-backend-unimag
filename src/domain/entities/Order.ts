export class Order {
   uuid?: string
   readonly orderedProducts: {
      productId: string,
      quantity: number
   }[]
   readonly userId: string
}