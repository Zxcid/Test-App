import {Component, OnInit} from '@angular/core';
import {EStore, IStore} from "../../shared/constants/store.constants";
import {HttpService} from "../../shared/services/http.service";
import {Observable, take} from "rxjs";
import {Router} from "@angular/router";
import {AppRoutingConstant} from "../../shared/classes/app-routing.constants";
import {ESections} from "../../shared/constants/routing.constants";
import {PersistenceService} from "../../shared/services/persistence.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myStore!: IStore;

  private _stores: Observable<IStore[]> = new Observable<IStore[]>();
  get stores(): Observable<IStore[]> {
    return this._stores;
  }
  set stores(stores: Observable<IStore[]>) {
    this._stores = stores;
  }

  constructor(private httpService: HttpService,
              private _persistenceService: PersistenceService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getStores();
  }

  private getStores(): void {
    this.stores = this.httpService.getAllStores().pipe(take(1));
  }

  navigateToStore(): void {
    this._persistenceService.setSelectedStore(this.myStore);
    console.log("navigating to store: " + this.myStore[EStore.name] + " with id: " + this.myStore[EStore.storeId]);
    this._router.navigate([AppRoutingConstant.fullPath([ESections.products])]).then();
  }

}
