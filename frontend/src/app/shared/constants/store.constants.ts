import {IProduct} from "./product.constants";

export enum EStore {
  'name' = 'name',
  'id' = 'id',
  'products' = 'products'
}

export interface IStore {
  [EStore.name]: string,
  [EStore.id]: number,
  [EStore.products]?: IProduct[]
}
