import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CategoryItemsComponent } from './category-items/category-items.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndividualUserComponent } from './individual-user/individual-user.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductComponent } from './product/product.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'user', component: UsersComponent},
  {path: 'product', component: ProductComponent},
  {path: 'cart', component: CartComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'category/:category', component: CategoryItemsComponent},
  {path: 'user/:user' , component: IndividualUserComponent},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
