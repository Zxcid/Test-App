export enum EStore {
  'name' = 'name',
  'storeId' = 'storeId'
}

export interface IStore {
  [EStore.name]: string,
  [EStore.storeId]: number
}

export const _defaultStore: IStore = {
  [EStore.name]: '',
  [EStore.storeId]: 999
}
