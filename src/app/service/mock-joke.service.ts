import { Injectable } from '@angular/core';
import { AbstractJokeService } from './abstract-joke.service';
import { AbstractJoke } from '../class/abstract-joke';
import { YoMamaJoke } from '../class/yo-mama-joke';

@Injectable({
  providedIn: 'root'
})
export class MockJokeService extends AbstractJokeService {

  constructor() {
    super() 
  }

  async getJoke() : Promise<AbstractJoke>{
    let test : AbstractJoke;

    test = new YoMamaJoke("Yo Mama is so slow she waits for the clock to go around again");
    return test;
  }
}
