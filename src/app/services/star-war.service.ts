import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Film, FilmResult } from '../models/film';


@Injectable({
  providedIn: 'root'
})
export class StarWarService {

  private swapiRoot: string;

  constructor(private http: HttpClient) {
    this.swapiRoot = 'https://swapi.co/api/';
  }

  getFilms(): Observable<FilmResult> {
    // https://swapi.co/api/films/
    return this.http.get<FilmResult>('https://swapi.co/api/films/')
      .pipe(
        tap(_ => this.log('fetched Film')),
        catchError(this.handleError('getFilms', null))
      );
  }

  /** GET heroes from the server */
  getFilm (id: number): Observable<Film> {
    return this.http.get<Film>(this.swapiRoot)
      .pipe(
        tap(_ => this.log('fetched Film')),
        catchError(this.handleError('getFilm', null))
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log('HeroService:', message);
  }
}

