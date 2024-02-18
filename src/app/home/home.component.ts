import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from '../services/tmdb-api.service';
import { Store } from '@ngrx/store';
import { selectTvShows } from '../store/show-list.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public tvShows: any;
  constructor(private readonly store: Store) {}

  getTvShows() {
    // this.tmdbApiService.getAllTvShows().subscribe((res) => {
    //   console.log(res.results);
    //   this.variavel = res.results;
    // });
    this.store.select(selectTvShows).subscribe((shows) => {
      this.tvShows = shows;
    });
  }

  ngOnInit(): void {
    this.getTvShows();
    console.log(this.tvShows)
    // this.tmdbApiService.getAllTvShows().subscribe((res) => {
    //   console.log(res.results);
    //   this.variavel = res.results;
    // });
  }
}
