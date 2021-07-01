import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns = ['id', 'name', 'price'];
  isLoading = false;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getAll().subscribe(response => {
      this.products = response;
      console.log(this.products);
      this.isLoading = false;
    });
  }
}
