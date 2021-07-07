import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  displayedColumns = ['id', 'name', 'price', 'actions'];
  
  products: Product[] = [];
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

  delete(id: number) {
    this.productService.delete(id).subscribe(() => {
      this.products = this.products.filter(product => product.id !== id);
      this.productService.showMessage('Produto excluído com sucesso!');
    });
  }
}
