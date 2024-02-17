import { Component, OnInit } from '@angular/core';
import { TmdbApiService } from '../services/tmdb-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public variavel: any;
  constructor(private readonly tmdbApiService: TmdbApiService) {}

  getTvShows(){
    this.tmdbApiService.getAllTvShows().subscribe((res) => {
      console.log(res.results);
      this.variavel = res.results;
    });
  }

  ngOnInit(): void {
    // this.tmdbApiService.getAllTvShows().subscribe((res) => {
    //   console.log(res.results);
    //   this.variavel = res.results;
    // });
  }
}
