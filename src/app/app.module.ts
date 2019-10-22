import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductTracklistingComponent } from './product-tracklisting/product-tracklisting.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'product/:id',
    component: ProductPageComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    ProductDescriptionComponent,
    ProductListComponent,
    ProductTracklistingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
