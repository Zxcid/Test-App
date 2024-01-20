import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EStore, IStore} from "../../shared/constants/store.constants";
import {StoreService} from "../../shared/services/store.service";
import {take} from "rxjs";
import {Router} from "@angular/router";
import {UtilsService} from "../../shared/services/utils.service";
import {AppRoutingConstant} from "../../shared/classes/app-routing.constants";
import {ESections} from "../../shared/constants/routing.constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myStore!: IStore;

  private _stores: IStore[] = [];
  get stores(): IStore[] {
    return this._stores;
  }
  set stores(stores: IStore[]) {
    this._stores = stores;
  }

  constructor(private _storeService: StoreService,
              private _router: Router) { }

  ngOnInit(): void {
    this.getStores();
  }

  private getStores(): void {
    this._storeService.getAllStores().pipe(take(1)).subscribe((stores: IStore[]) => {
      if (!UtilsService.isVoid(stores)) {
        this.stores = stores;
      }
    });
  }

  navigateToStore(): void {
    this._storeService.setProducts(this.myStore[EStore.products]);
    this._storeService.setStore(this.myStore);
    console.log("navigating to store: " + this.myStore[EStore.name]);
    this._router.navigate([AppRoutingConstant.fullPath([ESections.products])]).then();
  }

}
