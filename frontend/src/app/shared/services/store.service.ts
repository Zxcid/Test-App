import {Injectable} from '@angular/core';
import {catchError, Observable} from "rxjs";
import {IStore} from "../constants/store.constants";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AppService} from "./app.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient,
              private appService: AppService) { }

  public getAllStores(): Observable<IStore[]> {
    return this.http.get<IStore[]>(environment.api.allStores)
      .pipe(
        catchError(this.appService.handleError<IStore[]>('getAllStores', []))
      );
  }
}
