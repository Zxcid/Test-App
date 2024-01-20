import {Component, Input, OnInit} from '@angular/core';
import {IProduct} from "../../shared/constants/product.constants";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct() {
    console.log("Deleting product: " + this.product.title);
  }

}
