import {Injectable} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {EStore, IStore} from "../constants/store.constants";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AppService} from "./app.service";
import {IProduct} from "../constants/product.constants";
import {PersistenceService} from "./persistence.service";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
              private appService: AppService,
              private persistenceService: PersistenceService) { }

  public getAllStores(): Observable<IStore[]> {
    return this.http.get<IStore[]>(environment.api.allStores)
      .pipe(
        catchError(this.appService.handleError<IStore[]>('getAllStores', []))
      );
  }

  public getAllProductsForCurrentStore(storeId: number): Observable<IProduct[]> {
    let params: HttpParams = new HttpParams();
    params.set('storeId', storeId);

    return this.http.get<IProduct[]>(environment.api.allProducts, {params: params})
      .pipe(
        catchError(this.appService.handleError<IProduct[]>('getAllProductsForCurrentStore', []))
      );
  }

  public postProduct(product: IProduct) {
    let params: HttpParams = new HttpParams();
    params.set('storeId', this.persistenceService.selectedStore.value[EStore.storeId]);

    return this.http.post(environment.api.saveProduct, product, {observe: 'response', params: params})
      .pipe(
        catchError(this.appService.handleError<IStore[]>('postProduct', []))
      );
  }

  // TODO refactor del productId
  public deleteProduct(product: IProduct) {
    return this.http.delete(environment.api.deleteProduct, {observe: 'response', body: product})
      .pipe(
        catchError(this.appService.handleError<IStore[]>('deleteProduct', []))
      );
  }
}
