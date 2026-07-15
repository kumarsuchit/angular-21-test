import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: "full" },
    { path: 'user', loadComponent: () => import('../app/features/userDetails/user/user').then(c => c.User) },
    { path: 'rxjs-basic', loadComponent: () => import('../app/rxjs/rxjs-basic/rxjs-basic').then(c => c.RxjsBasic) },
    { path: 'rxjs-operators', loadComponent: () => import('../app/rxjs/rxjs-operators/rxjs-operators').then(c => c.RxjsOperators) }
];
