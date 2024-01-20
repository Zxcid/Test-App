import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../shared/constants/product.constants";
import {StoreService} from "../shared/services/store.service";
import {Subject, takeUntil} from "rxjs";
import {UtilsService} from "../shared/services/utils.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: IProduct[] = [];

  private $destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private _storeService: StoreService) { }

  ngOnInit(): void {
    this._storeService.products.pipe(takeUntil(this.$destroy)).subscribe(p => {
      if (!UtilsService.isVoid(p)){
        console.log(p);
        this.products = p;
      }
    });
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.complete();
  }

}
