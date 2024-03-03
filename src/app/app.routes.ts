import { Routes } from '@angular/router';
import { HomeComponent } from './presentation/views/home/home.component';
import { ContainerComponent } from './presentation/component/shared/container/container.component';

export const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [{ path: 'home', component: HomeComponent }],
  },
];

