import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { YoMamaJoke } from '../yo-mama-joke';

@Injectable({
  providedIn: 'root'
})
export class MockJokeService {
  
  constructor(private _http : HttpClient) { }
  async getJoke() : Promise<YoMamaJoke>{

    let joke : YoMamaJoke;
    await this._http.get<YoMamaJoke>("http://localhost:3000").toPromise().then(result => joke = result);
    console.log(joke);
    return joke;
  }
}
