export enum EProduct {
  'id' = 'id',
  'price' = 'price',
  'title' = 'title',
  'category' = 'category',
  'employee' = 'employee',
  'description' = 'description',
  'reviews' = 'reviews'
}

export interface IProduct {
  [EProduct.id]?: number,
  [EProduct.price]: number,
  [EProduct.title]: string,
  [EProduct.category]?: string,
  [EProduct.description]?: string,
  [EProduct.employee]?: string,
  [EProduct.reviews]?: string[]
}
