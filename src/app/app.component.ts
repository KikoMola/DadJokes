import { Joke } from './models/Joke';

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { JokeService } from './services/joke.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DadJokes';
  actualJoke = '';

  constructor(public jokeService: JokeService, public http: HttpClient) {}

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke() {
    this.jokeService.getJoke().subscribe((data: any) => {
      this.actualJoke = data.joke;
    });
    
    
  }
}
