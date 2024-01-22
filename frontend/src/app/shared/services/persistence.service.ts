import {Injectable} from '@angular/core';
import {IProduct} from "../constants/product.constants";
import {IStore} from "../constants/store.constants";
import {BehaviorSubject} from "rxjs";

/**
 * Lo scopo di questa classe è solo dimostrativo dell'utilizzo dei subject. La gestione dei prodotti e dei negozi va
 * lasciata al BE!
 */
@Injectable({
  providedIn: 'root'
})
export class PersistenceService {
  private _products: IProduct[] = [];
  private _selectedStore: IStore = {name: '', storeId: 0};

  public selectedStore: BehaviorSubject<IStore> = new BehaviorSubject<IStore>(this._selectedStore);
  public products: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor() { }

  public setSelectedStore(store: IStore) {
    this._selectedStore = store;
    this.selectedStore.next(this._selectedStore);
  }

  public setProducts(products: IProduct[]) {
    this._products = products;
    this.products.next(this._products);
  }

  public removeProduct(product: IProduct) {
    const index: number = this._products.indexOf(product);

    if (index !== -1) {
      this._products.splice(index, 1);
    }

    this.products.next(this._products);
  }

  public addProduct(product: IProduct) {
    this._products.push(product);
    this.products.next(this._products);
  }
}
