import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyFirstComponent } from './my-first/my-first.component';
import { DBServices } from './services/db.service';
import { CourseComponent } from './course/course.component';
import { FavoritComponent } from './favorit/favorit.component';
import { SummaryPipe } from './summary.pipe';
import { PanelComponent } from './panel/panel.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NavigationComponent } from './IT/navigation/navigation.component';
import { ProductComponent } from './IT/product/product.component';
import { MyOrderComponent } from './IT/my-order/my-order.component';
import { AdminProductComponent } from './IT/admin/admin-product/admin-product.component';
import { AdminOrderComponent } from './IT/admin/admin-order/admin-order.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ShoppingCartComponent } from './IT/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    CourseComponent,
    FavoritComponent,
    SummaryPipe,
    PanelComponent,
    NgswitchComponent,
    NavigationComponent,
    ProductComponent,
    MyOrderComponent,
    AdminProductComponent,
    AdminOrderComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    DBServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
