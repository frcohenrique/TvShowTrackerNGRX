import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { AuthenticationLoginComponent } from './authentication/authentication-login/authentication-login.component';
import { AuthenticationRegisterComponent } from './authentication/authentication-register/authentication-register.component';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['authentication/login']);
const redirectLoggedInToDashboard = () => redirectLoggedInTo(['/']);
const routes: Routes = [
  {
    path: 'authentication/login',
    pathMatch: 'full',
    component: AuthenticationLoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectLoggedInToDashboard },
  },
  {
    path: 'authentication/register',
    pathMatch: 'full',
    component: AuthenticationRegisterComponent,
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: '',
    loadChildren: () =>
      import('./tv-shows-list/tv-shows-list.module').then(
        (m) => m.TvShowsListModule
      ),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: '404',
    loadChildren: () =>
      import('./shared/miscellaneous/miscellaneous.module').then(
        (m) => m.MiscellaneousModule
      ),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./shared/miscellaneous/miscellaneous.module').then(
        (m) => m.MiscellaneousModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
