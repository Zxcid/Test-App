import {Component, OnDestroy, OnInit} from '@angular/core';
import {IStore} from "../shared/constants/store.constants";
import {StoreService} from "../shared/services/store.service";
import {Subject, takeUntil} from "rxjs";
import {UtilsService} from "../shared/services/utils.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  storeSelected!: IStore;

  private $destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private _storeService: StoreService) { }

  ngOnInit(): void {
    this._storeService.selectedStore.pipe(takeUntil(this.$destroy)).subscribe(s => {
      if (!UtilsService.isVoid(s)) {
        this.storeSelected = s;
      }
    })
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.complete();
  }

}
