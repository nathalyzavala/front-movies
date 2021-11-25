import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Movies } from '../models/Movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  public url: string;

  constructor(
    private _http: HttpClient) {
    this.url = "http://192.168.0.26:9099/api/v1/movie";
  }

  getMovies(): Observable<Movies[]> {
    return this._http.get<Movies[]>(this.url);
  };

  createMovie(movie: Movies): Observable<Object> {
    return this._http.post<Object>(this.url, movie);
  }

  getMovie(id: number): Observable<Movies> {
    return this._http.get<Movies>(this.url + id);
  };

  updateMovie(movie: Movies): Observable<Object> {
    return this._http.put(this.url + movie.idMovie, movie);
  }

  deleteMovie(id: number): Observable<Object> {
    return this._http.delete(this.url + id);
  }

}
