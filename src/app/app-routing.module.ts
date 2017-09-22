import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './items/item/item.component';
import { ItemsComponent } from './items/items.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { animation: 'home' }},
  {path: 'items', component: ItemsComponent, data: { animation: 'items' }},
  {path: 'item/:id', component: ItemComponent, data: { animation: 'items' }},
  {path: 'widgets', component: WidgetsComponent, data: { animation: 'widgets' }},
  {path: 'profile', loadChildren: './user/user.module#UserModule', data: { animation: 'profile' }},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
