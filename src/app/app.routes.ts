import { Routes } from '@angular/router';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { BlogPageComponent } from './pages/blog/blog-page.component';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', component: MainPageComponent
  },
  {
    path: 'blog', component:BlogPageComponent
  }
];
