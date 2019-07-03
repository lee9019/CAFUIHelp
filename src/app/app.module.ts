import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '../core';
import { MenusComponent } from './menus/menus.component';
import { MapsComponent } from './maps/maps.component';
import { GridComponent } from './grid/grid.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { ChartsComponent } from './charts/charts.component';
import {htmlToPlaintextPipe} from './comon/filters/custom.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MenusComponent,
    MapsComponent,
    GridComponent,
    BreadCrumbsComponent,
    ChartsComponent,
    htmlToPlaintextPipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
