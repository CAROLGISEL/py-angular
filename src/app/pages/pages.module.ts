import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CategoryComponent, DashboardComponent, ProductComponent],
  imports: [CommonModule,HttpClientModule],
  exports: [CategoryComponent, DashboardComponent, ProductComponent],
})
export class PagesModule {}
