import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 
import { routes } from './app.routes'; 
import { ɵDomRendererFactory2 as _DomRendererFactory2 } from '@angular/platform-browser';
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideAnimationsAsync(),provideRouter(routes),_DomRendererFactory2
   ]
};
