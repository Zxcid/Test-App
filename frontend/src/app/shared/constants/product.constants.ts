export enum EProduct {
  'id' = 'id',
  'storeId' = 'storeId',
  'price' = 'price',
  'title' = 'title',
  'category' = 'category',
  'employee' = 'employee',
  'description' = 'description',
  'reviews' = 'reviews'
}

export interface IProduct {
  [EProduct.id]?: number,
  [EProduct.storeId]: number,
  [EProduct.price]: number,
  [EProduct.title]: string,
  [EProduct.category]?: string,
  [EProduct.description]?: string,
  [EProduct.employee]?: string,
  [EProduct.reviews]?: string[]
}
