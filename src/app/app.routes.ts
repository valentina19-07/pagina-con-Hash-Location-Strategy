import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { Projects } from './pages/projects';
import { Contact } from './pages/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Inicio | DevHub' },
  { path: 'projects', component: Projects, title: 'Proyectos | DevHub' },
  { path: 'contact', component: Contact, title: 'Contacto | DevHub' },
  { path: '**', redirectTo: 'home' },
];
