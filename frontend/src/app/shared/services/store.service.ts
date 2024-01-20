import {Injectable} from '@angular/core';
import {catchError, Observable, Subject} from "rxjs";
import {IStore} from "../constants/store.constants";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {AppService} from "./app.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  public selectedStore: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient,
              private appService: AppService) { }

  public getAllStores(): Observable<IStore[]> {
    return this.http.get<IStore[]>(environment.api.allStores)
      .pipe(
        catchError(this.appService.handleError<IStore[]>('getAllStores', []))
      );
  }

  public selectStore(store: string) {
    this.selectedStore.next(store);
  }
}
