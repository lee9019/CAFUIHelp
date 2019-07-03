import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppConstant} from '../../../app/app.constant';
// import { environment } from '../../../../../src_common/environments/environment';
import { HeaderConfig } from './header-config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: []
})
export class HeaderComponent implements OnInit {
  public seLogo: string;
  public icon: string;
  public title: string;
  public subtitle: string;
  public user: any = {};
  public logo: string;
  public appConstant = AppConstant;
  public loginIcon: string;
  public dropIcon: string;
  public localeIcon: string;
  public token: string | null;
  public langObj: object;
  public selectedLanguage: string;
  public isLoggedIn: Boolean = false;
  public isInternalUser: Boolean = true; // default isInternalUser is true
  public loggedInUser: string | null;
  public urls: any = {};
  public context: any = {};
  public isInternal: any = {};
  public headerConfiguration = HeaderConfig;
  public alarmCount = 1;
  public warnCount = 0;

  constructor( public router: Router) {
  }

  public login() {
  }

  public logout() {
  }

  public ngOnInit() {
    this.dropIcon = this.appConstant.images + 'dropdown.svg';
    this.localeIcon = this.appConstant.images + 'countrySelection.svg';
    this.loginIcon = this.appConstant.images + 'login.svg';
    this.seLogo = this.appConstant.images + 'schneiderLogo.svg';

    // this.selectedLanguage = this.languages[0];
    

    // sets the last selected language
   /*  const loadLanguage = setInterval(() => {
      this.selectedLanguage = JSON.parse(sessionStorage.getItem('selected'));
      if (this.selectedLanguage === null) {
        this.selectedLanguage = this.langObj['en-US'];
        localStorage.setItem('selected', this.selectedLanguage);
      
      } else {
       
      }
      clearInterval(loadLanguage);
    }, 1000); */
    this.updateAlarmandWarning();
    this.updateAlarmandWarningless();
  }

  updateAlarmandWarning() {
    this.alarmCount++;
    this.warnCount++;
    setTimeout(() => {
      this.updateAlarmandWarning();
    }, 5000);
  }
  updateAlarmandWarningless() {
    this.alarmCount--;
    this.warnCount--;
    setTimeout(() => {
      this.updateAlarmandWarningless();
    }, 16000);
  }

  switchTo(language: any) {
  
    this.selectedLanguage = this.langObj[language.code];
    localStorage.setItem('selected', this.selectedLanguage);
  }

  private buildLanguage(languages: any[]) {
    const obj = {};
    languages.forEach(language => {
      obj[language.code] = language.name;
    });
    return obj;
  }
}
