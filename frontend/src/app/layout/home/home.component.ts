import {Component, OnInit} from '@angular/core';
import {IStore} from "../../shared/constants/store.constants";
import {StoreService} from "../../shared/services/store.service";
import {take} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private _stores: IStore[] = [];
  get stores(): IStore[] {
    return this._stores;
  }
  set stores(stores: IStore[]) {
    this._stores = stores;
  }

  constructor(private _storeService: StoreService) { }

  ngOnInit(): void {
    this.getStores();
  }

  private getStores() {
    this._storeService.getAllStores().pipe(take(1)).subscribe(stores => {
      this.stores = stores;
    });
  }

}
