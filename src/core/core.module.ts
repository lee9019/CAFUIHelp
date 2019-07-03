import { NgModule, Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';

import { ModalAboutComponent } from './shell/header/modal-about/modal-about.component';
import { HelpMenuComponent } from './shell/header/help-menu/help-menu.component';
 import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    
    RouterModule,
    
    
     NgbModule.forRoot()
  ],
  declarations: [HeaderComponent, ShellComponent, ModalAboutComponent, HelpMenuComponent],
  entryComponents: [ModalAboutComponent],
  providers: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }
}
