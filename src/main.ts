import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { akitaDevtools, enableAkitaProdMode } from '@datorama/akita';

import { RootModule } from './app/root/root.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
} else {
  akitaDevtools();
}

platformBrowserDynamic().bootstrapModule(RootModule)
  .catch(err => console.error(err));
