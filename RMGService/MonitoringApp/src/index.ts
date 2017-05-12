import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';
global.jQuery = global.$ = require('jquery');

//if (process.env.ENV === 'production') {
    //enableProdMode();
//}

platformBrowserDynamic().bootstrapModule(AppModule);
