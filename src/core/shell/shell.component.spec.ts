import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SeWebModule } from '@se/web-ui-angular';
import { AuthenticationService } from '@core/authentication/authentication.service';
import { MockAuthenticationService } from '@core/authentication/authentication.service.mock';
import { ShellComponent } from './shell.component';
import { CoreModule } from '../core.module';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, TranslateModule.forRoot(), SeWebModule, CoreModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});