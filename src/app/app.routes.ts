import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About)
  },
  {
    path: 'mentors',
    loadComponent: () => import('./pages/mentors/mentors').then(m => m.Mentors)
  },
  {
    path: 'sponsors',
    loadComponent: () => import('./pages/sponsors/sponsors').then(m => m.Sponsors)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy').then(m => m.Privacy)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
