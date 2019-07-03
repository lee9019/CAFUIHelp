import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '../core';
import {ChartsComponent} from '../app/charts/charts.component';
import {MapsComponent} from '../app/maps/maps.component';
import {GridComponent} from '../app/grid/grid.component';
import {MenusComponent} from '../app/menus/menus.component';
import {BreadCrumbsComponent} from '../app/bread-crumbs/bread-crumbs.component';
const routes: Routes = [

  // Lazy loading
Route.withShell([
  
  { path: 'Chart', component: ChartsComponent },
  { path: 'Map', component: MapsComponent },
  { path: 'BreadCrumb', component: BreadCrumbsComponent },
  { path: 'Grid', component: GridComponent },
  { path: 'Menu', component: MenusComponent }

]),
// Fallback when no prior route is matched
{ path: '**', redirectTo: '', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
