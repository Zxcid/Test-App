import {Injectable} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {IStore} from "../constants/store.constants";
import {HttpClient, HttpParams, HttpResponse} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AppService} from "./app.service";
import {IProduct} from "../constants/product.constants";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient,
              private appService: AppService) { }

  public getAllStores(): Observable<IStore[]> {
    return this.http.get<IStore[]>(environment.api.allStores)
      .pipe(
        catchError(this.appService.handleError<IStore[]>('getAllStores', []))
      );
  }

  public getAllProductsForCurrentStore(storeId: number): Observable<IProduct[]> {
    let params: HttpParams = new HttpParams().append('storeId', storeId);

    return this.http.get<IProduct[]>(environment.api.allProducts, {params, observe: 'body'})
      .pipe(
        catchError(this.appService.handleError<IProduct[]>('getAllProductsForCurrentStore', []))
      );
  }

  public postProduct(product: IProduct, storeId: number): Observable<IProduct> {
    let params: HttpParams = new HttpParams().append('storeId', storeId);

    return this.http.post<IProduct>(environment.api.saveProduct, product, {params, observe: 'body'})
      .pipe(
        catchError(this.appService.handleError<IProduct>('postProduct'))
      );
  }

  /**
   * Esempio di observe: 'response' con switch sul codice di risposta.
   *
   * @param productId
   */
  public deleteProduct(productId: number): Observable<HttpResponse<any>> {
    let params: HttpParams = new HttpParams().append('productId', productId);

    return this.http.delete<HttpResponse<any>>(environment.api.deleteProduct, {observe: 'response', params})
      .pipe(
        catchError(this.appService.handleError<any>('deleteProduct', []))
      );
  }
}
