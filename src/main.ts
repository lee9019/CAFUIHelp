import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
 import * as singleSpa from 'single-spa';
 import 'zone.js';
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
  export const runScript = async (url) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
    });
  };

  
export const matchingPathname = (pathnames) =>
(location) =>
    pathnames.some(pathname => location.pathname === pathname);

  const loadAngularApp = async () => {
      await runScript('https://cafappone.azurewebsites.net/inline.bundle.js');
      await runScript('https://cafappone.azurewebsites.net/polyfills.bundle.js');
      await runScript('https://cafappone.azurewebsites.net/styles.bundle.js');
      await runScript('https://cafappone.azurewebsites.net/vendor.bundle.js');
      await runScript('https://cafappone.azurewebsites.net/main.bundle.js');

      return window['angularApp'];
  };

  singleSpa.registerApplication('angular-app', loadAngularApp , matchingPathname(['/angapp', '/eventdemo']));

  const loadReactApp = async () => {
    await runScript('http://localhost:3005/static/js/bunlde.js');

    return window['reactApp']
  };


export const registerReactApp = () => {
    singleSpa.registerApplication('react-app', loadReactApp, matchingPathname(['/reactapp', '/eventdemo']));
};

singleSpa.start();
