import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from '../services/tmdb-api.service';
import { Store } from '@ngrx/store';
import { addTvShow } from '../store/show-list.actions';
import { PageEvent } from '@angular/material/paginator';
import { Subject, switchMap } from 'rxjs';

@Component({
  selector: 'app-tv-shows-list',
  templateUrl: './tv-shows-list.component.html',
  styleUrls: ['./tv-shows-list.component.scss'],
})
export class TvShowsListComponent implements OnInit {
  public showContent: boolean = false;

  public tvShows: [] | any = [];

  private pageChangedSubject = new Subject<number>();
  private posterApiUrl = 'https://image.tmdb.org/t/p/original';
  pageEvent: PageEvent | any;
  constructor(
    private readonly tmdbApiService: TmdbApiService,
    private store: Store
  ) {}

  addTvShow(show: any) {
    this.store.dispatch(addTvShow({ show }));
  }

  changePage() {
    console.log(this.pageEvent.pageIndex);
    if (this.pageEvent.pageIndex <= 0) {
      this.pageEvent.pageIndex = 1;
    }
    this.pageChangedSubject.next(this.pageEvent.pageIndex);
  }

  ngOnInit(): void {
    this.pageChangedSubject
      .pipe(
        switchMap((page: number) => this.tmdbApiService.getAllTvShows(page))
      )
      .subscribe({
        next: (res) => {
          this.tvShows = res;
          res.results.map((result: any) => {
            result.poster = `${this.posterApiUrl}/${result.poster_path}`;
          });
          console.log(res);
          this.showContent = true;
        },
        error: (error) => {
          console.error(error);
        },
      });

    // Carregar os programas de TV da primeira página ao iniciar o componente
    this.pageChangedSubject.next(1);
  }
}
