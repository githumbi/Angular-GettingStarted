import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConvertToSpace } from './convert-to-space.pipe';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ConvertToSpace,
    StarComponent
  ],
  imports: [
    CommonModule,
   FormsModule
  ]
})
export class SharedModule { }
