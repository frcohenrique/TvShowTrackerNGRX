import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbApiService {
  private readonly ApiURL = 'https://api.themoviedb.org/3';
  private token = '';
  constructor(private readonly _httpClient: HttpClient) {}

  //https://image.tmdb.org/t/p/original/rXojaQcxVUubPLSrFV8PD4xdjrs.jpg pegar imagem

  getTvShowByName(): Observable<any> {
    return this._httpClient.get(
      `${this.ApiURL}/search/tv?query=elementary&include_adult=true&language=en-US&page=1`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          accept: 'application/json',
        },
      }
    );
  }

  getAllTvShows(): Observable<any> {
    return this._httpClient.get(
      `${this.ApiURL}/discover/tv?include_adult=true&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=200`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          accept: 'application/json',
        },
      }
    );
  }
}
