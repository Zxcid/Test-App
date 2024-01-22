export enum EProduct {
  'productId' = 'productId',
  'storeId' = 'storeId',
  'price' = 'price',
  'title' = 'title',
  'category' = 'category',
  'employee' = 'employee',
  'description' = 'description',
  'reviews' = 'reviews'
}

export interface IProduct {
  [EProduct.productId]: number,
  [EProduct.storeId]: number,
  [EProduct.price]: number,
  [EProduct.title]: string,
  [EProduct.category]?: string,
  [EProduct.description]?: string,
  [EProduct.employee]?: string,
  [EProduct.reviews]?: string[]
}
