import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

import { SharedModule } from '../shared/shared.module';

import { ConvertToSpace } from '../shared/convert-to-space.pipe';
import { ProductRoutingModule } from './product-routing.module';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ConvertToSpace],
  imports: [
   
   SharedModule,
   ProductRoutingModule,
   
  ],
})
export class ProductModule {}
