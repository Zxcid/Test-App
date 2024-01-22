import {Component, OnDestroy, OnInit} from '@angular/core';
import {IProduct} from "../shared/constants/product.constants";
import {HttpService} from "../shared/services/http.service";
import {Subject, take} from "rxjs";
import {UtilsService} from "../shared/services/utils.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {NewProductComponent} from "./new-product/new-product.component";
import {PersistenceService} from "../shared/services/persistence.service";
import {EStore} from "../shared/constants/store.constants";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: IProduct[] = [];
  isFilterOpen: boolean = false;
  storeId?: number;

  private $destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private _httpService: HttpService,
              private persistenceService: PersistenceService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.persistenceService.selectedStore.pipe(take(1)).subscribe(s => {
      this.storeId = s[EStore.storeId];
    });

    if (this.storeId != null) {
      this._httpService.getAllProductsForCurrentStore(this.storeId).pipe(take(1)).subscribe(p => {
        if (!UtilsService.isVoid(p)) {
          this.persistenceService.setProducts(p);
          this.products.push(...p);
        }
      });
    }
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
        this.persistenceService.addProduct(result);
        this.storeProduct(result);
      }
    });
  }

  storeProduct(product: IProduct): void {
    this._httpService.postProduct(product).pipe(take(1)).subscribe(p => {
      if (!UtilsService.isVoid(p)){
        // TODO snackbar? 'Product saved'
        this.products.push(product);

      } else {
        // TODO snackbar? 'Error'
      }
    });
  }

  deleteProduct(product: IProduct): void {
    this.persistenceService.removeProduct(product);
  }

  toggleFilterMenu(): void {
    this.isFilterOpen = !this.isFilterOpen;
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }

}
