export enum EStore {
  'name' = 'name',
  'storeId' = 'storeId'
}

export interface IStore {
  [EStore.name]: string,
  [EStore.storeId]: number
}

export const _defaultStore: IStore = {
  [EStore.name]: 'Ge-Store',
  [EStore.storeId]: 999
}
