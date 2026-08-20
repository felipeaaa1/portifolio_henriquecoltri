import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

const startAtTop = () => {
  if (!window.location.hash || window.location.hash === '#inicio') {
    window.scrollTo(0, 0);
  }
};

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
startAtTop();
window.addEventListener('load', startAtTop, { once: true });

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withInMemoryScrolling({
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top'
    }))
  ]
}).catch(error => console.error(error));
