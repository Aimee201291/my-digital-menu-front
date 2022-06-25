import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.services';
//import { Product } from '../../../core/models/product.model';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product: Product = new Product();
  loader: boolean = false;
  successMessage: string = "";
  errorMessage: string = "";
  showErrorMessage: boolean = false;
  showSuccessMessage: boolean = false;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {

  }

  createProduct(product: Product) {
    this.loader = true;
    this.productsService.createProduct(product)
      .subscribe( data => {
        console.log(data);
        this.successMessage = "Producto agregado exitosamente!";
        this.showErrorMessage = false;
        this.loader = false;
        this.showSuccessMessage = true;
        setTimeout(function(this:any) {
          this.showSuccessMessage = false;
        }.bind(this), 5000);
      },
      err => {
        this.errorMessage = "Ha ocurrido un error, por favor revise su conexión a Internet o intente más tarde.";
        this.showSuccessMessage = false;
        this.loader = false;
        this.showErrorMessage = true;
        setTimeout(function(this:any) {
          this.showErrorMessage = false;
        }.bind(this), 5000);
      });
  }
}