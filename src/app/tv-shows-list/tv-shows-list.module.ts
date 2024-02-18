import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowsListComponent } from './tv-shows-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
const routes: Routes = [
  {
    path: 'tv-shows',
    component: TvShowsListComponent,
  },
];

@NgModule({
  declarations: [TvShowsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
})
export class TvShowsListModule {}
