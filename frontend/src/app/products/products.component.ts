import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../shared/constants/product.constants";
import {StoreService} from "../shared/services/store.service";
import {Subject, take, takeUntil} from "rxjs";
import {UtilsService} from "../shared/services/utils.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {NewProductComponent} from "./new-product/new-product.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: IProduct[] = [];
  isFilterOpen: boolean = false;

  private $destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private _storeService: StoreService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this._storeService.products.pipe(takeUntil(this.$destroy)).subscribe(p => {
      if (!UtilsService.isVoid(p)) {
        console.log(p);
        this.products = p;
      }
    });
  }

  addNewProduct(): void {
    console.log("open modal...")
    const dialogRef: MatDialogRef<NewProductComponent> = this.dialog.open(NewProductComponent, {
      width: '90%',
      hasBackdrop: true,
      disableClose: false,
      data: null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!UtilsService.isVoid(result)) {
        this._storeService.addProduct(result);
        this.storeProduct(result);
      }
    });
  }

  storeProduct(product: IProduct): void {
    this._storeService.postProduct(product).pipe(take(1)).subscribe(p => {
      if (!UtilsService.isVoid(p)){
        // TODO snackbar? 'Product saved'
      } else {
        // TODO snackbar? 'Error'
      }
    });
  }

  deleteProduct(product: IProduct): void {
    this._storeService.removeProduct(product);
  }

  toggleFilterMenu(): void {
    this.isFilterOpen = !this.isFilterOpen;
    console.log('this.isFilterOpen: ' + this.isFilterOpen);
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }

}
