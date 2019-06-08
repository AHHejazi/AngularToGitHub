import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './IT/product/product.component';
import { MyOrderComponent } from './IT/my-order/my-order.component';
import { AdminOrderComponent } from './IT/admin/admin-order/admin-order.component';
import { AdminProductComponent } from './IT/admin/admin-product/admin-product.component';
import { ShoppingCartComponent } from './IT/shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: 'products', component: ProductComponent},
  {path: 'orders', component: MyOrderComponent},
  {path: 'admin/orders', component: AdminOrderComponent},
  {path: 'admin/products', component: AdminProductComponent},
  {path: 'shoppingCart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
