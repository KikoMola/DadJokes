import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Joke } from '../models/Joke';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke() {
    return this.http.get<Joke[]>('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
  }
}
