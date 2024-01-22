import {Component, OnDestroy, OnInit} from '@angular/core';
import {EProduct, IProduct} from "../shared/constants/product.constants";
import {HttpService} from "../shared/services/http.service";
import {Subject, take} from "rxjs";
import {UtilsService} from "../shared/services/utils.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {NewProductComponent} from "./new-product/new-product.component";
import {PersistenceService} from "../shared/services/persistence.service";
import {EStore} from "../shared/constants/store.constants";
import {HttpResponse, HttpStatusCode} from "@angular/common/http";

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
    this.persistenceService.selectedStore.pipe(take(1)).subscribe(s => {
      this.storeId = s[EStore.storeId];
    });
    this.getProducts();
  }

  getProducts(): void {
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
        this.storeProduct(result);
      }
    });
  }

  storeProduct(product: IProduct): void {
    if (this.storeId != null) {
      this._httpService.postProduct(product, this.storeId).pipe(take(1)).subscribe(p => {
        if (!UtilsService.isVoid(p)){
          // TODO snackbar? 'Product saved'
          this.products.push(p);
          this.persistenceService.addProduct(p);
        } else {
          // TODO snackbar? 'Error'
        }
      });
    }
  }

  deleteProduct(product: IProduct): void {
    this._httpService.deleteProduct(product[EProduct.productId]).pipe(take(1)).subscribe((response: HttpResponse<any>) => {
      switch (response.status) {
        case HttpStatusCode.Ok:
          //TODO snackbar
          console.log('Operazione eseguita con successo!');
          const index: number = this.products.indexOf(product);
          if (index !== -1) {
            this.products.splice(index, 1);
          }
          break;
        default:
          console.log("Esito operazione: " + response.status);
          console.log('Messaggio dal BE: ' + response.body);
      }
    });
  }

  toggleFilterMenu(): void {
    this.isFilterOpen = !this.isFilterOpen;
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }

}
