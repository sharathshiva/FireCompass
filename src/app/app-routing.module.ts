import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RamenComponent} from './components/ramen/ramen.component';
import {CountryBrandsComponent} from './components/country-brands/country-brands.component';
import {NotFoundComponent} from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: RamenComponent},
  {path: 'brands/:Country', component: CountryBrandsComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
