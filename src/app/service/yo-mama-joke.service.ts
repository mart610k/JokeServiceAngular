import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { YoMamaJoke } from '../class/yo-mama-joke';
import { AbstractJoke } from '../class/abstract-joke';
import { AbstractJokeService } from "./abstract-joke.service";

@Injectable({
  providedIn: 'root'
})
export class YoMamaJokeService extends AbstractJokeService {
  
  constructor(private _http : HttpClient) { 
    super();
  }
  async getJoke() : Promise<AbstractJoke>{
    
    let mama : AbstractJoke;

    await this._http.get<YoMamaJoke>("http://localhost:3000").toPromise()
    .then(result =>
      {
        mama = new YoMamaJoke(result.joke);
      });
    return mama;
  }
}
