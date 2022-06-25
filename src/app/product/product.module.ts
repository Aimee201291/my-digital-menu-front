import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
    declarations: [
        ProductsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ProductRoutingModule
    ]
})
export class ProductModule { }