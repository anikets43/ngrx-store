import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';

Observable.prototype.debug = function(message: string) {

};

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));