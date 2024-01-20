import { Component, OnInit } from '@angular/core';
import {IStore} from "../shared/constants/store.constants";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  storeSelected!: IStore;

  constructor() { }

  ngOnInit(): void {
  }

  selectStore(store: IStore): void {
    this.storeSelected = store;
  }

}
