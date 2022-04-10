import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [ProductListComponent, ProductComponent, CategoryComponent],
  imports: [CommonModule, ProductRoutingModule],
  exports: [ProductComponent],
})
export class ProductModule {}
