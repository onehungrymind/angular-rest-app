import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { animation: 'home' }},
  {path: 'items', component: ItemsComponent, data: { animation: 'items' }},
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
