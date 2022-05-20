import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: 'products/categories/:id',
    component: ProductComponent,
  },
  {
    path: 'products/categories',
    component: ProductComponent,
  },
  {
    path: 'products',
    component: ProductComponent,
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
