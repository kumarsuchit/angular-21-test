import { Routes } from '@angular/router';
import { RxjsBasic } from './rxjs-basic/rxjs-basic';

export const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: "full" },
    { path: 'user', loadComponent: () => import('../app/features/userDetails/user/user').then(c => c.User) },
    { path: 'rxjs-basic', component: RxjsBasic }
];
