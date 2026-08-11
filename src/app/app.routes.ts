import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/pages/home-page/home-page.component')
      .then(component => component.HomePageComponent)
  },
  {
    path: 'cases',
    loadComponent: () => import('./cases/pages/cases-page/cases-page.component')
      .then(component => component.CasesPageComponent)
  },
  { path: '**', redirectTo: '' }
];
