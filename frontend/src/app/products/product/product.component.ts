import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IProduct} from "../../shared/constants/product.constants";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct;

  @Output() deletedProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(product: IProduct): void {
    console.log("Deleting product: " + this.product.title);
    this.deletedProduct.emit(product);
  }

}
