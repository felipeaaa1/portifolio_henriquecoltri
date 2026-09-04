import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

const startAtTop = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  if (!window.location.hash || window.location.hash === '#inicio') {
    window.scrollTo(0, 0);
  }
};

if (typeof window !== 'undefined') {
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  startAtTop();
  window.addEventListener('load', startAtTop, { once: true });
}

bootstrapApplication(AppComponent, appConfig)
  .catch(error => console.error(error));