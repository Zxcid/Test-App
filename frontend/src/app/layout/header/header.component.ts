import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {StoreService} from "../../shared/services/store.service";
import {Subject} from "rxjs";
import {IStore} from "../../shared/constants/store.constants";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _store!: IStore;
  @Input() set store(store: IStore) {
    this._store = store;
  }
  get store(): IStore {
    return this._store;
  }

  appName: string = environment.appName;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

}
