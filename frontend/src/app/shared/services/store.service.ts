import {Injectable} from '@angular/core';
import {BehaviorSubject, catchError, Observable} from "rxjs";
import {_defaultStore, IStore} from "../constants/store.constants";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AppService} from "./app.service";
import {IProduct} from "../constants/product.constants";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private _products: IProduct[] = [];
  private _selectedStore: IStore = {name: '', id: 0, products: []};

  public selectedStore: BehaviorSubject<IStore> = new BehaviorSubject<IStore>(this._selectedStore);
  public products: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor(private http: HttpClient,
              private appService: AppService) { }

  public getAllStores(): Observable<IStore[]> {
    return this.http.get<IStore[]>(environment.api.allStores)
      .pipe(
        catchError(this.appService.handleError<IStore[]>('getAllStores', []))
      );
  }

  public setStore(store: IStore) {
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
