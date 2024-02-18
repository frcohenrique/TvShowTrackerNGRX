import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('./tv-shows-list/tv-shows-list.module').then(
        (m) => m.TvShowsListModule
      ),
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
