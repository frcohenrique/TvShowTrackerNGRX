import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TmdbApiService {
  private readonly ApiURL = 'https://api.themoviedb.org/3';
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2YyZjc5OTI5ZmNlYjdiMjA4OGZmZjYyNzY1Y2QxZCIsInN1YiI6IjY1Y2U4YmMyNTc1MzBlMDE3Y2VkZjRjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0GvzvHr4X3TENW4ELaqfqhAj20If9g_33aixwXlIaLY';
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

  getAllTvShows(page: number): Observable<any> {
    return this._httpClient.get(
      `${this.ApiURL}/discover/tv?include_adult=true&language=en-US&page=${page}&sort_by=vote_average.desc&vote_count.gte=200`,
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
          accept: 'application/json',
        },
      }
    );
  }
}
